import { Simplebus } from 'superbus';
import { docMatchesFilter } from '../query/query';
import { Query } from '../query/query-types';
import { IStorageAsync } from '../storage/storage-types';
import { Doc } from '../util/doc-types';
import { NotImplementedError, StorageIsClosedError } from '../util/errors';


interface QueryFollower2SimpleEvent {
    kind: 'idle' | 'didClose';
}
interface QueryFollower2DocEvent {
    kind: 'doc',
    doc: Doc,
}
type QueryFollower2Event =
    QueryFollower2SimpleEvent |
    QueryFollower2DocEvent

// expected sequence of events:
//  doc doc doc doc doc idle  // initial batch, catching up
//  doc idle  // getting ingest events as they happen
//  doc doc idle  // getting ingest events as they happen
//  didClose  // storage closed


class QueryFollower2 {
    bus: Simplebus<QueryFollower2Event>;
    storage: IStorageAsync;

    _query: Query;  // we'll mutate this as _maxLocalIndex increases
    _maxLocalIndex: number;  // the highest localIndex we've seen
    _idleCountdown: any | null;  // null when we're idle and the idle event has already been fired
    _idleTimeout: number;
    _isClosed: boolean = false;

    /**
     * Expected use:
     *     // instantiate
     *     let follower = new QueryFollower2(storgae, query, 100);
     * 
     *     // add your callback(s) here.
     *     // all the kinds of events will go through this single callback:
     *     // 'doc', 'idle', and 'didClose'
     *     follower.bus.on(event => {});
     * 
     *     // after adding your callback, call begin() to get started
     *     // (don't await it, just call it)
     *     follower.begin();
     * 
     *     // now your callback will start getting called as needed
     * 
     *     // you can close the queryFollower but it does not close the underlying Storage
     *     follower.close()
     * 
     */
    constructor(storage: IStorageAsync, query: Query, idleTimeout: number) {
        this.bus = new Simplebus<QueryFollower2Event>();
        this.storage = storage;
        this._query = query;
        this._idleTimeout = idleTimeout;

        // enforce rules on supported queries
        if (this._query.historyMode !== 'all') { throw new NotImplementedError(`query historyMode must be 'all'`); }
        if (this._query.orderBy !== 'localIndex ASC') { throw new NotImplementedError(`query orderBy must be 'localIndexASC'`); }
        if (this._query.limit !== undefined) { throw new NotImplementedError(`query must not have a limit`); }

        this._maxLocalIndex = query.startAfter?.localIndex ?? -1;
    }

    async begin() {
        // don't await this begin() method, just call it.

        if (this.storage.isClosed()) {
            await this.close();
            return;
        }

        // TODO: this should be a class variable so we can unsub from our close() method
        let unsubIngest = () => {};

        // TODO: when exactly are we closed?
        this.storage.bus.once('didClose', async () => {
            unsubIngest();
            await this.close();
        });

        // iterate to get existing docs
        while (true) {
            let shouldQueryAgain = await this._queryOnce();
            if (!shouldQueryAgain) { break; }
        }

        if (this.storage.isClosed()) {
            await this.close();
            return;
        }

        // switch over to subscribing to docs as they come
        if (!this.isClosed) {
            unsubIngest = this.storage.bus.on('ingest', async (channel: string, doc: Doc) => {
                if (this._isClosed) { return; }
                if (docMatchesFilter(doc, this._query.filter || {})) {
                    if (doc._localIndex as number > this._maxLocalIndex) {
                        this._startOrRestartIdleCountdown(10000); // give up to this long for the event to be sent and processed
                        await this.bus.send({ kind: 'doc', doc });
                        this._maxLocalIndex = Math.max(this._maxLocalIndex, doc._localIndex as number);
                        this._startOrRestartIdleCountdown(this._idleTimeout);
                    }
                }
            });
        }
    }

    // returns "should try again"
    async _queryOnce(): Promise<boolean> {
        let docs: Doc[];

        // TODO: query at the same time as sending the previous event?

        // query for docs
        try {
            this._query.startAfter = { localIndex: this._maxLocalIndex };
            docs = await this.storage.queryDocs(this._query);
        } catch (err) {
            if (err instanceof StorageIsClosedError) { return false; }
            else { throw err; }
        }

        // send events for each doc, and advance our _maxLocalIndex
        for (let doc of docs) {
            if (this.isClosed) { return false; }
            this._startOrRestartIdleCountdown(10000); // give up to this long for the event to be sent and processed
            await this.bus.send({ kind: 'doc', doc, });
            this._maxLocalIndex = Math.max(this._maxLocalIndex, doc._localIndex as number);
            this._startOrRestartIdleCountdown(this._idleTimeout);
        }

        return docs.length > 0;
    }

    _startOrRestartIdleCountdown(timeout: number) {
        // every time we send a 'doc' event to our bus, we restart the idle countdown.
        // if we haven't sent a 'doc' event in a certain amount of time, this will fire and
        // send an 'idle' event.

        if (this._idleCountdown) { clearTimeout(this._idleCountdown); }
        if (this.isClosed) { return }
        this._idleCountdown = setTimeout(() => {
            this._idleCountdown = null;
            if (this.isClosed) { return }
            this.bus.send({ kind: 'idle' });
        }, timeout);
    }

    async close() {
        // this does not close the underlying Storage or anything else
        if (this._isClosed) { return; }
        this._isClosed = true;
        clearTimeout(this._idleCountdown);
        this._idleCountdown = null;
        this.bus.removeAllSubscribers();
        await this.bus.send({ kind: 'didClose' });
    }

    get isIdle(): boolean {
        return this._idleCountdown === null;
    }
    get isClosed(): boolean {
        return this._isClosed === null;
    }
}






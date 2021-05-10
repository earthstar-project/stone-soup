
//--------------------------------------------------

import { Logger } from './log';
let logger = new Logger('lifecycle', 'blue');
let J = JSON.stringify;

//================================================================================

export enum Lifecycle {
    // a linear sequence of states for the state machine
    // which can only increase, never move backward

    NEW = 0,       // just instantiated
    HATCHING = 1,  // ...temporary, while hatch() is in progress
    READY = 2,     // normal state
    CLOSING = 3,   // ...temporary, while close() is in progress
    CLOSED = 4,    // closd forever, there's no going back
}

export class LifecycleBase {
    lifecycle: Lifecycle = Lifecycle.NEW;

    ready: Promise<void>;
    _resolve: () => void;
    _reject: () => void;

    constructor() {
        logger.debug('constructor');
        this._resolve = () => {};
        this._reject = () => {};
        this.ready = new Promise<void>((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }

    /**
     * Users of this class should call "await hatch" after instantiating it
     * and before trying to use it
     */
    async hatch() {
        logger.debug('hatch');

        if (this.lifecycle === Lifecycle.HATCHING || this.lifecycle === Lifecycle.READY) {
            // Ok to call hatch if you're already hatching or ready, it just does nothing.
            logger.debug(`...lifecycle is ${Lifecycle[this.lifecycle]} -- ignoring hatch attempt.`);
            return;
        } else if (this.lifecycle === Lifecycle.CLOSING || this.lifecycle === Lifecycle.CLOSED) {
            // Not ok to hatch when closing or closed -- that would be going backwards
            logger.debug(`...lifecycle is ${Lifecycle[this.lifecycle]} -- throwing an error.`);
            throw new Error(`Can't hatch() when lifecycle is ${Lifecycle[this.lifecycle]}`);
        }
        // otherwise, lifecycle is NEW and we can hatch.

        // Do the actual hatching
        this.lifecycle = Lifecycle.HATCHING;
        logger.debug('...calling getHatched');
        await this.getHatched();
        logger.debug('...done calling getHatched');
        this.lifecycle = Lifecycle.READY;

        // release anyone waiting on our this.ready promise
        logger.debug('...resolving ready promise...');
        this._resolve();
        logger.debug('...done hatching');

        // return `this` for easy chaining:
        //   like `let thing = await new Thing().hatch()`
        return this;
    }

    /**
     * Override this function in your subclass -- it's what should
     * happen when it's hatching
     */
    async getHatched() {
        logger.debug('getHatched -- override me');
    }

    async close() {
        logger.debug('close');

        // It's always safe to call close no matter what lifecycle state you're in.
        // It just does nothing unless you're READY.
        // TODO: can you close something that's NEW or HATCHING?
        if (this.lifecycle !== Lifecycle.READY) {
            logger.debug(`...doing nothing because lifecycle is ${Lifecycle[this.lifecycle]}`);
            return;
        }

        this.lifecycle = Lifecycle.CLOSING;

        // make a new promise that is always rejected, for people who `await ready` now or in the future
        logger.debug('...updating promises...');
        logger.debug('...make new rejected promise');

        this.ready.catch(err => {});
        this._reject();

        this.ready = Promise.reject();
        this.ready.catch(err => {});
        logger.debug('...done with promises');

        logger.debug('...calling getClosed');
        await this.getClosed();
        logger.debug('...done calling getClosed');

        this.lifecycle = Lifecycle.CLOSED;

        logger.debug('...done closing');
    }

    /**
     * Override this function in your subclass -- it's what should
     * happen when it's closing
     */
    async getClosed() {
        logger.debug('getClosed -- override me');
    }

    isReady() { return this.lifecycle === Lifecycle.READY; }
    isClosed() { return this.lifecycle === Lifecycle.CLOSED; }
    isSortofReady() {
        // Return true if we're in the HATCHING, READY, or CLOSING state.
        // and false if we're NEW or CLOSED.
        // This is for functions that need to run during those hatching or closing times.
        return this.lifecycle === Lifecycle.HATCHING ||
            this.lifecycle === Lifecycle.READY ||
            this.lifecycle === Lifecycle.CLOSING;
    }
    _throwIfNotReady() {
        if (!this.isReady()) { throw new Error(`lifecycle is ${Lifecycle[this.lifecycle]} instead of READY`); }
    }
    _throwIfNotSortofReady() {
        if (!this.isSortofReady()) { throw new Error(`lifecycle is ${Lifecycle[this.lifecycle]} but must be HATCHING, READY, or CLOSING.`); }
    }
}

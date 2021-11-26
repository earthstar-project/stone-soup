import chalk from 'chalk'

import { makeId } from '@earthstar-project/mini-rpc';
import { SuperbusMap } from 'superbus-map';
import { IStorageAsync } from '../storage/storage-types';
import { Doc } from '../util/doc-types';
import {
    ILocalPeer,
    IPacket,
    IPeerGarden,
    NetworkKind,
} from "./types";

let log = (...args: any[]) => console.log(chalk.yellow('  [localPeer]'), ...args);

export class LocalPeer implements ILocalPeer {
    _isHatched: boolean = false;
    _isClosed: boolean = false;
    _unsubFromGardens: any[] = [];
    peerId: string;
    gardens: SuperbusMap<NetworkKind, IPeerGarden> = new SuperbusMap();  // networkkind -> garden
    storages: SuperbusMap<string, IStorageAsync> = new SuperbusMap();  // workspace -> storage
    constructor(peerId?: string) {
        this.peerId = peerId ?? makeId();
        log(`constructor(${this.peerId})`);
    }
    addGarden(garden: IPeerGarden): void {
        log('addGarden(...)');
        if (this._isHatched === true) {
            throw new Error('can only add gardens before hatching the localPeer');
        }
        this.gardens.set(garden.kind, garden);
        let unsub = garden.onIncomingPacket(async (packet: IPacket) => {
            // send out to the other gardens
            // they will skip any peers with the same peer id.
            // do this all in parallel.
            log('onIncomingDoc listener got a new doc.  sending to all gardens...');
            for (let garden of this.gardens.values()) {
                for (let remotePeer of garden.remotePeers.values()) {
                    await remotePeer.transport.send(packet);
                }
            }
            log('onIncomingDoc listener got a new doc.  ...done.');
        });
        this._unsubFromGardens.push(unsub);
        log('...addGarden(...): done.');
    }
    async hatch(): Promise<void> {
        log('hatch()');
        if (this._isHatched === true) { log('already hatched.' ); return; }
        for (let garden of this.gardens.values()) {
            await garden.hatch();
        }
        this._isHatched = true;
        log('...hatch(): done.');
    }
    async close(): Promise<void> {
        log('close()');
        if (this._isClosed === true) { log('already closed.'); return; }
        for (let unsub of this._unsubFromGardens) { unsub(); }
        for (let garden of [...this.gardens.values()]) {
            log('closing a garden:', garden.kind);
            await garden.close();
        }
        this._isClosed = true;
        log('...close(): done.');
    }
}
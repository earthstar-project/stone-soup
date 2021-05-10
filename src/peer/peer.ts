import { SuperbusMap } from 'superbus-map';

import { WorkspaceAddress } from '../util/doc-types';
import { IStorageAsync } from '../storage/storage-types';
import {
    IPeer,
    PeerId,
} from './peer-types';

import { LifecycleBase, Lifecycle } from '../util/lifecycle';
import { randomId } from '../util/misc';

//--------------------------------------------------

import { Logger } from '../util/log';
let logger = new Logger('peer', 'blueBright');
let J = JSON.stringify;

//================================================================================

//export type PeerEvent = 'close';

export class Peer extends LifecycleBase implements IPeer {
    peerId: PeerId

    //bus: Superbus<PeerEvent>;
    storageMap: SuperbusMap<WorkspaceAddress, IStorageAsync>;
    constructor() {
        logger.debug('constructor');
        logger.debug('...calling super');
        super();
        logger.debug('...done calling super');
        //this.bus = new Superbus<PeerEvent>();
        this.storageMap = new SuperbusMap<WorkspaceAddress, IStorageAsync>();
        this.peerId = 'peer:' + randomId();
        logger.debug('...my peerId:', this.peerId);
    }

    //--------------------------------------------------
    // lifecycle

    async getHatched() {
        logger.debug('getHatched - nothing to do');
    }
    async getClosed() {
        logger.debug('getClosed');
        logger.debug('...closing all my storages...');
        for (let storage of this.storageMap.values()) {
            await storage.close();
        }
        logger.debug('...done closing all my storages');
    }

    //--------------------------------------------------
    // getters

    hasWorkspace(workspace: WorkspaceAddress): boolean {
        this._throwIfNotReady();
        return this.storageMap.has(workspace);
    }
    workspaces(): WorkspaceAddress[] {
        this._throwIfNotReady();
        let keys = [...this.storageMap.keys()];
        keys.sort();
        return keys;
    }
    storages(): IStorageAsync[] {
        this._throwIfNotReady();
        let keys = [...this.storageMap.keys()];
        keys.sort();
        return keys.map(key => this.storageMap.get(key) as IStorageAsync);
    }
    size(): number {
        this._throwIfNotReady();
        return this.storageMap.size;
    }

    //--------------------------------------------------
    // setters

    async addStorage(storage: IStorageAsync): Promise<void> {
        this._throwIfNotReady();
        logger.debug(`addStorage(${J(storage.workspace)})`);
        if (this.storageMap.has(storage.workspace)) {
            logger.debug(`already had a storage with that workspace`);
            throw new Error(`Peer.addStorage: already has a storage with workspace ${J(storage.workspace)}.  Don't add another one.`);
        }
        await this.storageMap.set(storage.workspace, storage);
        logger.debug(`    ...addStorage: done`);
    }
    async removeStorageByWorkspace(workspace: WorkspaceAddress): Promise<void> {
        this._throwIfNotReady();
        logger.debug(`removeStorageByWorkspace(${J(workspace)})`);
        await this.storageMap.delete(workspace);
    }
    async removeStorage(storage: IStorageAsync): Promise<void> {
        this._throwIfNotReady();
        let existingStorage = this.storageMap.get(storage.workspace);
        if (storage === existingStorage) {
            logger.debug(`removeStorage(${J(storage.workspace)})`);
            await this.removeStorageByWorkspace(storage.workspace);
        } else {
            logger.debug(`removeStorage(${J(storage.workspace)}) -- same workspace but it's a different instance now; ignoring`);
        }
    }
}

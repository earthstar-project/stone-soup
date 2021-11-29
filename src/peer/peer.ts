import { SuperbusMap } from 'superbus-map';

import { EarthstarError } from '../util/errors';
import { WorkspaceAddress } from '../util/doc-types';
import { IStorageAsync } from '../storage/storage-types';
import {
    IPeer,
    LifecycleState,
    PeerId,
} from './peer-types';
import { IGardener, NetworkType, RemotePeer } from './gardener-types';

import { randomId } from '../util/misc';

//--------------------------------------------------

import { Logger } from '../util/log';
let logger = new Logger('peer', 'blueBright');
let J = JSON.stringify;

//================================================================================

//export type PeerEvent = 'close';

export class Peer implements IPeer {
    peerId: PeerId
    remotePeers: Map<PeerId, RemotePeer> = new Map();
    gardeners: Map<NetworkType, IGardener> = new Map();
    _lifecycleState: LifecycleState = 'NEW';

    //bus: Superbus<PeerEvent>;
    storageMap: SuperbusMap<WorkspaceAddress, IStorageAsync>;
    constructor() {
        logger.debug('constructor');
        //this.bus = new Superbus<PeerEvent>();
        this.storageMap = new SuperbusMap<WorkspaceAddress, IStorageAsync>();
        this.peerId = 'peer:' + randomId();
    }

    //--------------------------------------------------

    async hatch(): Promise<void> {
        logger.log(`hatch peer.  (current state = ${this._lifecycleState})`);
        if (this._lifecycleState === 'NEW') {
            this._lifecycleState = 'HATCHED';
            for (let gardener of this.gardeners.values()) {
                await gardener.hatch();
            }
        } else if (this._lifecycleState === 'HATCHED') {
            throw new EarthstarError('peer is already hatched');
        } else if (this._lifecycleState === 'CLOSED') {
            throw new EarthstarError('peer cannot be hatched because it is closed');
        }
    };

    async close(): Promise<void> {
        logger.log(`close peer.  (current state = ${this._lifecycleState})`);
        if (this._lifecycleState === 'NEW') {
            throw new EarthstarError('cannot close a Peer unless its lifecycle state is HATCHED');
        } else if (this._lifecycleState === 'HATCHED') {
            this._lifecycleState = 'CLOSED';
            for (let gardener of this.gardeners.values()) {
                await gardener.close();
            }
        } else if (this._lifecycleState === 'CLOSED') {
            // closing twice does nothing
            logger.warn('closed a peer that was already closed.  this is allowed but might indicate a bug.');
            return;
        }
    };

    //--------------------------------------------------

    async addGardener(gardener: IGardener): Promise<void> {
        logger.log(`addGardener ${gardener.networkType}`);
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        this.gardeners.set(gardener.networkType, gardener);
        // if the peer is already hatched, then hatch the gardener now.
        // otherwise leave it unhatched and it will get hatched when
        // the peer is hatched.
        if (this._lifecycleState === 'HATCHED') {
            await gardener.hatch();
        }
    }
    async removeGardener(networkType: NetworkType): Promise<void> {
        logger.log(`removeGardener ${networkType}`);
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        let gardener: IGardener | undefined =
            [...this.gardeners.values()]
            .filter(g => g.networkType === networkType)[0];
        if (gardener === undefined) {
            throw new EarthstarError(`cannot remove gardener from peer; not found: ${networkType}`);
        }
        await gardener.close();
        this.gardeners.delete(networkType);
    }

    //--------------------------------------------------
    // getters

    hasWorkspace(workspace: WorkspaceAddress): boolean {
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        return this.storageMap.has(workspace);
    }
    workspaces(): WorkspaceAddress[] {
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        let keys = [...this.storageMap.keys()];
        keys.sort();
        return keys;
    }
    storages(): IStorageAsync[] {
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        let keys = [...this.storageMap.keys()];
        keys.sort();
        return keys.map(key => this.storageMap.get(key) as IStorageAsync);
    }
    size(): number {
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        return this.storageMap.size;
    }
    getStorage(ws: WorkspaceAddress): IStorageAsync | undefined {
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        return this.storageMap.get(ws);
    }

    //--------------------------------------------------
    // setters

    async addStorage(storage: IStorageAsync): Promise<void> {
        logger.debug(`addStorage(${J(storage.workspace)})`);
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        if (this.storageMap.has(storage.workspace)) {
            logger.debug(`already had a storage with that workspace`);
            throw new EarthstarError(`Peer.addStorage: already has a storage with workspace ${J(storage.workspace)}.  Don't add another one.`);
        }
        await this.storageMap.set(storage.workspace, storage);
        logger.debug(`    ...addStorage: done`);
    }
    async removeStorageByWorkspace(workspace: WorkspaceAddress): Promise<void> {
        logger.debug(`removeStorageByWorkspace(${J(workspace)})`);
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        await this.storageMap.delete(workspace);
    }
    async removeStorage(storage: IStorageAsync): Promise<void> {
        if (this._lifecycleState === 'CLOSED') { throw new EarthstarError('peer is closed'); }
        let existingStorage = this.storageMap.get(storage.workspace);
        if (storage === existingStorage) {
            logger.debug(`removeStorage(${J(storage.workspace)})`);
            await this.removeStorageByWorkspace(storage.workspace);
        } else {
            logger.debug(`removeStorage(${J(storage.workspace)}) -- same workspace but it's a different instance now; ignoring`);
        }
    }
}

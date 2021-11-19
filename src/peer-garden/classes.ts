import { makeId } from '@earthstar-project/mini-rpc';
import { SuperbusMap } from 'superbus-map';
import { IStorageAsync } from '../storage/storage-types';
import { Doc } from '../util/doc-types';
import {
    ILocalPeer,
    IPacket,
    IPeerGarden,
    IRemotePeer,
    ITransport,
    NetworkKind,
    Thunk,
} from "./types";


export class LocalPeer implements ILocalPeer {
    _isHatched: boolean = false;
    _isClosed: boolean = false;
    _unsubFromGardens: any[] = [];
    peerId: string;
    gardens: SuperbusMap<NetworkKind, IPeerGarden> = new SuperbusMap();  // networkkind -> garden
    storages: SuperbusMap<string, IStorageAsync> = new SuperbusMap();  // workspace -> storage
    constructor(peerId?: string) {
        this.peerId = peerId ?? makeId();
    }
    addGarden(garden: IPeerGarden): void {
        if (this._isHatched === true) {
            throw new Error('can only add gardens before hatching the localPeer');
        }
        this.gardens.set(garden.kind, garden);
        let unsub = garden.onIncomingDoc(async (doc: Doc, sourcePeerId: string) => {
            // send out to the other gardens
            // they will skip any peers with the same peer id.
            // do this all in parallel.
            for (let garden of this.gardens.values()) {
                garden.sendDoc(doc, sourcePeerId);
            }
        });
        this._unsubFromGardens.push(unsub);
    }
    async hatch(): Promise<void> {
        if (this._isHatched === true) { return; }
        for (let garden of this.gardens.values()) {
            await garden.hatch();
        }
        this._isHatched = true;
    }
    async close(): Promise<void> {
        if (this._isClosed = true) { return; }
        for (let unsub of this._unsubFromGardens) { unsub(); }
        for (let garden of this.gardens.values()) {
            await garden.close();
        }
        this._isClosed = true;
    }
}

export interface PacketPing extends IPacket {
    packetId: string;
    message: 'ping',
}
export interface PacketPong extends IPacket {
    packetId: string;
    message: 'pong',
}

export class PeerGardenHttpServer implements IPeerGarden {
    kind: NetworkKind = 'HTTP';
    remotePeers: SuperbusMap<string, IRemotePeer> = new SuperbusMap();  // peer id -> peer
    _onIncomingDocCbs: Set<any> = new Set();
    constructor(public port: number = 8000) {
    }
    async hatch(): Promise<void> {}
    async sendDoc(doc: Doc, sourcePeerId: string): Promise<void> {}
    onIncomingDoc(cb: (doc: Doc, sourcePeer: string) => Promise<void>): Thunk {
        this._onIncomingDocCbs.add(cb);
        return () => this._onIncomingDocCbs.delete(cb);
    }
    async close(): Promise<void> {}
}

export class RemotePeerHttp implements IRemotePeer {
    kind: NetworkKind = 'HTTP';
    peerId: string = '?';
    workspaces: string[] = [];
    transport: TransportHttp = new TransportHttp();
    constructor() {
    }
    async hatch(): Promise<void> {}
    async close(): Promise<void> {}
}

export class TransportHttp implements ITransport {
    kind: NetworkKind = 'HTTP';
    constructor() {
    }
    async hatch(): Promise<void> {}
    async send(packet: IPacket): Promise<void> {
        // fetch.post, or something
    }
    onReceive(cb: (packet: IPacket) => Promise<void>): Thunk {
        // start listening to SSE events
        // return an unsubscribe function
        return () => {}
    }
    async close(): Promise<void> {}
}

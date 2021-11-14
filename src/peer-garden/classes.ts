import { makeId } from '@earthstar-project/mini-rpc';
import { SuperbusMap } from 'superbus-map';
import { NetworkError } from '../../dist/types/legacy-node';
import { FormatValidatorEs4 } from '../format-validators/format-validator-es4';
import { StorageAsync } from '../storage/storage-async';
import { StorageDriverAsyncMemory } from '../storage/storage-driver-async-memory';
import { IStorageAsync } from '../storage/storage-types';
import {
    ILocalPeer,
    IPacket,
    IPeerGarden,
    IRemotePeer,
    ITransport,
    NetworkKind,
    Thunk,
} from "./types";


class LocalPeer implements ILocalPeer {
    peerId: string;
    gardens: SuperbusMap<NetworkKind, IPeerGarden> = new SuperbusMap();  // networkkind -> garden
    storages: SuperbusMap<string, IStorageAsync> = new SuperbusMap();  // workspace -> storage
    constructor(peerId?: string) {
        this.peerId = peerId ?? makeId();
    }
    async hatch(): Promise<void> {}
    async close(): Promise<void> {}
}

interface PacketPing extends IPacket {
    packetId: string;
    message: 'ping',
}
interface PacketPong extends IPacket {
    packetId: string;
    message: 'pong',
}

class PeerGardenHttpServer implements IPeerGarden {
    kind: NetworkKind = 'HTTP';
    remotePeers: SuperbusMap<string, IRemotePeer> = new SuperbusMap();  // peer id -> peer
    constructor(public port: number = 8000) {
    }
    async hatch(): Promise<void> {}
    async close(): Promise<void> {}
}

class RemotePeerHttp implements IRemotePeer {
    kind: NetworkKind = 'HTTP';
    peerId: string = '?';
    workspaces: string[] = [];
    transport: TransportHttp = new TransportHttp();
    constructor() {
    }
    async hatch(): Promise<void> {}
    async close(): Promise<void> {}
}

class TransportHttp implements ITransport {
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

//================================================================================
// USAGE DEMO

let main = async () => {
    // set up a storage
    let ws = '+knitting.ajofijff';
    let knittingStorage = new StorageAsync(
        ws,
        FormatValidatorEs4,
        new StorageDriverAsyncMemory(ws)
    );

    // set up our local peer
    let localPeer = new LocalPeer();
    localPeer.storages.set(ws, knittingStorage);

    // add a garden where new remote peers can come and go
    let httpGarden = new PeerGardenHttpServer(8080);
    localPeer.gardens.set('HTTP', httpGarden);

    // do stuff when peers come or go
    httpGarden.remotePeers.bus.on('added', (channel, data) => {
        let remotePeer = data.value as IRemotePeer;
        console.log(`a new remote peer has appeared in the ${httpGarden.kind} garden: ${remotePeer.peerId}`);
    });
    httpGarden.remotePeers.bus.on('deleted', (channel, data) => {
        let remotePeer = data.value as IRemotePeer;
        console.log(`a remote peer has been removed from the ${httpGarden.kind} garden: ${remotePeer.peerId}`);
    });

    await localPeer.hatch();  // this will hatch everything else
}
main();
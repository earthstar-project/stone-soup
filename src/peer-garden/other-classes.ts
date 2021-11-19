import {
    IPacket,
    IRemotePeer,
    ITransport,
    NetworkKind,
    Thunk,
} from "./types";

let log = console.log;

export interface PacketPing extends IPacket {
    packetId: string;
    message: 'ping',
}
export interface PacketPong extends IPacket {
    packetId: string;
    message: 'pong',
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

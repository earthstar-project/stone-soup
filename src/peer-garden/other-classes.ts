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
    kind: NetworkKind = 'HTTP_SERVER';
    peerId: string = '?';
    workspaces: string[] = [];
    transport: TransportHttpToServer = new TransportHttpToServer();
    constructor() {
    }
    async hatch(): Promise<void> {}
    async close(): Promise<void> {}
}

export class TransportHttpToServer implements ITransport {
    kind: NetworkKind = 'HTTP_SERVER';
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

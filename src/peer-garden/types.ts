import { SuperbusMap } from "superbus-map";
import { IStorageAsync } from '../storage/storage-types';

export type NetworkKind =
    //'WEBSOCKET_SERVER' |
    //'WEBSOCKET_CLIENT' |
    //'HYPERSWARM' |
    'HTTP_SERVER' |
    'HTTP_CLIENT';
export type Role = 'ACTIVE' | 'PASSIVE';  // API role, not network role
export type Thunk = () => void;

export interface IPacket {
    packetId: string,
    [key: string]: any,
}

export interface ILocalPeer {
    peerId: string,
    gardens: SuperbusMap<NetworkKind, IPeerGarden>;  // networkkind -> garden
    storages: SuperbusMap<string, IStorageAsync>;  // workspace -> storage
    addGarden(garden: IPeerGarden): void;
    hatch(): Promise<void>;
    close(): Promise<void>;
}

export interface IPeerGarden {
    kind: NetworkKind;
    remotePeers: SuperbusMap<string, IRemotePeer>;  // peer id -> peer
    hatch(): Promise<void>;
    onIncomingPacket(cb: (packet: IPacket) => Promise<void>): Thunk;
    close(): Promise<void>;
}

export interface IRemotePeer {
    kind: NetworkKind;
    peerId: string;
    workspaces: string[];
    transport: ITransport;
    hatch(): Promise<void>;
    close(): Promise<void>;
}

export interface ITransport {
    kind: NetworkKind;
    hatch(): Promise<void>;
    send(packet: IPacket): Promise<void>;
    onReceive(cb: (packet: IPacket) => Promise<void>): Thunk;
    close(): Promise<void>;
}

import { SuperbusMap } from "superbus-map";
import { IStorageAsync } from '../storage/storage-types';

export type NetworkKind = 'WEBSOCKET' | 'HYPERSWARM' | 'HTTP';
export type Thunk = () => void;

export interface IPacket {
    packetId: string,
    [key: string]: any,
}

export interface ILocalPeer {
    peerId: string,
    gardens: SuperbusMap<NetworkKind, IPeerGarden>;  // networkkind -> garden
    storages: SuperbusMap<string, IStorageAsync>;  // workspace -> storage
    hatch(): Promise<void>;
    close(): Promise<void>;
}

export interface IPeerGarden {
    kind: NetworkKind;
    remotePeers: SuperbusMap<string, IRemotePeer>;  // peer id -> peer
    hatch(): Promise<void>;
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

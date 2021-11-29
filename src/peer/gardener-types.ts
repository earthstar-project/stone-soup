import { IPeer, PeerId } from './peer-types';

export type NetworkType =
    'HTTP_SERVER' |
    'HTTP_CLIENT';

export interface RemotePeer {
    peerId: PeerId,
    networkType: NetworkType,
}

export interface IGardener {
    networkType: NetworkType,
    localPeer: IPeer,
    hatch(): Promise<void>,
    close(): Promise<void>,
}


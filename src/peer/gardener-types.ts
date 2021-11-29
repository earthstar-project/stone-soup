import { IPeer, PeerId } from './peer-types';

export type NetworkType =
    'HTTP_SERVER' |
    'HTTP_CLIENT';
    // 'HYPERSWARM_PEER';

export interface RemotePeer {
    peerId: PeerId,
    networkType: NetworkType,
    lastSeen: number,  // unix timestamp
}

export interface IGardener {
    /*
        A Gardener is responsible for maintaining some of the remotePeer entries
        in the localPeer.remotePeers map.

        That map should be a subclass of Map that's observable (like SuperbusMap)
            https://github.com/cinnamon-bun/superbus-map
        so other parts of the code can notice peers coming and going.

        The gardener may be a server in which case it should start listening for
        connections when it hatches.
        Or it may be a client in which case it does not listen, it only connects
        to a preset list of URLs.
    */
    networkType: NetworkType,
    localPeer: IPeer,
    hatch(): Promise<void>,
    close(): Promise<void>,
}


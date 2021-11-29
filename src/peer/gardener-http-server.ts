import { IGardener, NetworkType } from './gardener-types';
import { IPeer } from './peer-types';

//--------------------------------------------------

import { Logger } from '../util/log';
let logger = new Logger('gardenerHttpServer', 'blueBright');
let J = JSON.stringify;

//================================================================================

export class GardenerHttpServer implements IGardener {
    networkType: NetworkType = 'HTTP_SERVER';
    constructor(public localPeer: IPeer, public port: number) {
        logger.log(`constructor.   peer ${localPeer.peerId}`);
    }
    async hatch(): Promise<void> {
        logger.log(`hatch`);
        // TODO: start http server
        // handle peers coming and going by updating the map at localPeer.remotePeers
    }
    async close(): Promise<void> {
        logger.log(`close`);
        // TODO: stop http server
    }
}

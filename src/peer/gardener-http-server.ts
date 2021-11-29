import { IGardener, NetworkType } from './gardener-types';
import { IPeer } from './peer-types';

import express, { Express} from 'express';

//--------------------------------------------------

import { Logger } from '../util/log';
let logger = new Logger('gardenerHttpServer', 'cyan');
let J = JSON.stringify;

//================================================================================

export class GardenerHttpServer implements IGardener {
    networkType: NetworkType = 'HTTP_SERVER';
    _app: Express;
    _appInstance: any = null;
    constructor(public localPeer: IPeer, public port: number) {
        logger.log(`constructor.   peer ${localPeer.peerId}`);
        this._app = express();
        this._app.use(express.json());
        this._app.post('/', async (req, res) => {
            let data = req.body;
            logger.log('got POST data:', JSON.stringify(data));
            res.send({ success: true });
        });
    }
    async hatch(): Promise<void> {
        // start http server
        logger.log(`hatch: listening for http POST on port ${this.port}`);
        //this._appInstance = this._app.listen(this.port);
        //// TODO: handle peers coming and going by updating the map at localPeer.remotePeers
    }
    async close(): Promise<void> {
        logger.log(`close: shutting down http server`);
        //if (this._appInstance !== null) {
        //    this._appInstance.close();
        //    this._appInstance = null;
        //}
    }
}

import chalk from 'chalk'

import { SuperbusMap } from 'superbus-map';
import { Doc } from '../util/doc-types';
import {
    IPeerGarden,
    IRemotePeer,
    NetworkKind,
    Thunk,
} from "./types";

import express, { Express} from 'express';

let log = (...args: any[]) => console.log(chalk.cyan('    [httpServer]'), ...args);

export class PeerGardenHttpServer implements IPeerGarden {
    kind: NetworkKind = 'HTTP';
    remotePeers: SuperbusMap<string, IRemotePeer> = new SuperbusMap();  // peer id -> peer
    _onIncomingDocCbs: Set<any> = new Set();
    _app: Express;
    _server: any = null;
    constructor(public port: number = 8000) {
        this._app = express()
        this._app.use(express.json())
        this._app.post('/', (req, res) => {
            let data = req.body;
            console.log(typeof data);
            console.log(data);
            res.send({success: true});
        });
    }
    async hatch(): Promise<void> {
        log('hatch(): listening on port', this.port);
        this._server = this._app.listen(this.port);
    }
    async sendDoc(doc: Doc, sourcePeerId: string): Promise<void> {
    }
    onIncomingDoc(cb: (doc: Doc, sourcePeer: string) => Promise<void>): Thunk {
        this._onIncomingDocCbs.add(cb);
        return () => this._onIncomingDocCbs.delete(cb);
    }
    async close(): Promise<void> {
        log('close(): shutting down http server');
        if (this._server !== null) { this._server.close(); }
    }
}

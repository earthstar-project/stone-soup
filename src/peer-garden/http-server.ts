import chalk from 'chalk'

import { SuperbusMap } from 'superbus-map';
import { Doc } from '../util/doc-types';
import {
    IPacket,
    IPeerGarden,
    IRemotePeer,
    NetworkKind,
    Role,
    Thunk,
} from "./types";

import express, { Express} from 'express';

let log = (...args: any[]) => console.log(chalk.cyan('    [httpServer]'), ...args);

type OnIncomingPacketCb = (packet: IPacket) => Promise<void>;

export class PeerGardenHttpServer implements IPeerGarden {
    kind: NetworkKind = 'HTTP_SERVER';
    role: Role = 'PASSIVE';
    remotePeers: SuperbusMap<string, IRemotePeer> = new SuperbusMap();  // peer id -> peer
    _onIncomingPacketCbs: Set<OnIncomingPacketCb> = new Set();
    _app: Express;
    _server: any = null;
    constructor(public port: number = 8000) {
        this._app = express()
        this._app.use(express.json())
        this._app.post('/', async (req, res) => {
            let data = req.body;
            log('got POST:', JSON.stringify(data));
            let packet: IPacket = data as IPacket;  // TODO: validate packet
            log('running incomingPacket callbacks');
            for (let cb of this._onIncomingPacketCbs) {
                await cb(packet);
            }
            log('...done running callbacks.  returning success as HTTP response.');
            res.send({success: true});
        });
    }
    async hatch(): Promise<void> {
        log('hatch(): listening on port', this.port);
        this._server = this._app.listen(this.port);
    }
    onIncomingPacket(cb: OnIncomingPacketCb): Thunk {
        log('onIncomingPacket(): adding subscription');
        this._onIncomingPacketCbs.add(cb);
        // return an unsubscribe thunk
        return () => this._onIncomingPacketCbs.delete(cb);
    }
    async close(): Promise<void> {
        log('close(): shutting down http server');
        if (this._server !== null) { this._server.close(); }
    }
}

import chalk from 'chalk'

import { FormatValidatorEs4 } from '../format-validators/format-validator-es4';
import { StorageAsync } from '../storage/storage-async';
import { StorageDriverAsyncMemory } from '../storage/storage-driver-async-memory';
import { LocalPeer } from './local-peer';
import { PeerGardenHttpServer } from './http-server';
import { sleep } from '../util/misc';
import {
    IRemotePeer,
} from "./types";

//================================================================================
// USAGE DEMO

let log = (...args: any[]) => console.log(chalk.whiteBright('[main]'), ...args);

let main = async () => {
    log('starting');

    // set up a storage
    log('making a storage');
    let ws = '+knitting.ajofijff';
    let knittingStorage = new StorageAsync(
        ws,
        FormatValidatorEs4,
        new StorageDriverAsyncMemory(ws)
    );

    // set up our local peer
    log('making a LocalPeer');
    let localPeer = new LocalPeer();
    localPeer.storages.set(ws, knittingStorage);

    // add a garden where new remote peers can come and go
    log('adding an http garden');
    let httpGarden = new PeerGardenHttpServer(8080);
    localPeer.addGarden(httpGarden);

    // do stuff when peers come or go
    log('subscribing to http garden events');
    httpGarden.remotePeers.bus.on('added', (channel, data) => {
        let remotePeer = data.value as IRemotePeer;
        console.log(`a new remote peer has appeared in the ${httpGarden.kind} garden: ${remotePeer.peerId}`);
    });
    httpGarden.remotePeers.bus.on('deleted', (channel, data) => {
        let remotePeer = data.value as IRemotePeer;
        console.log(`a remote peer has been removed from the ${httpGarden.kind} garden: ${remotePeer.peerId}`);
    });

    console.log();
    log('localPeer.hatch()...');
    await localPeer.hatch();  // this will hatch everything else
    console.log();
    log('sleep 1000...');
    await sleep(1000);
    console.log();
    log('localPeer.close()...');
    await localPeer.close();
    console.log();
    log('...done.');
}
main();
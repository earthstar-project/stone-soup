import { FormatValidatorEs4 } from '../format-validators/format-validator-es4';
import { StorageAsync } from '../storage/storage-async';
import { StorageDriverAsyncMemory } from '../storage/storage-driver-async-memory';
import { LocalPeer, PeerGardenHttpServer } from './classes';
import {
    IRemotePeer,
} from "./types";

//================================================================================
// USAGE DEMO

let main = async () => {
    // set up a storage
    let ws = '+knitting.ajofijff';
    let knittingStorage = new StorageAsync(
        ws,
        FormatValidatorEs4,
        new StorageDriverAsyncMemory(ws)
    );

    // set up our local peer
    let localPeer = new LocalPeer();
    localPeer.storages.set(ws, knittingStorage);

    // add a garden where new remote peers can come and go
    let httpGarden = new PeerGardenHttpServer(8080);
    localPeer.gardens.set('HTTP', httpGarden);

    // do stuff when peers come or go
    httpGarden.remotePeers.bus.on('added', (channel, data) => {
        let remotePeer = data.value as IRemotePeer;
        console.log(`a new remote peer has appeared in the ${httpGarden.kind} garden: ${remotePeer.peerId}`);
    });
    httpGarden.remotePeers.bus.on('deleted', (channel, data) => {
        let remotePeer = data.value as IRemotePeer;
        console.log(`a remote peer has been removed from the ${httpGarden.kind} garden: ${remotePeer.peerId}`);
    });

    await localPeer.hatch();  // this will hatch everything else
}
main();
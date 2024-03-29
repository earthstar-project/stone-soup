//import { FakeTime } from "https://deno.land/x/mock@0.12.2/mod.ts";
import { assert, assertEquals } from "../asserts.ts";
import { Rpc } from "../test-deps.ts";
import { Peer } from "../../peer/peer.ts";
import { Crypto } from "../../crypto/crypto.ts";
import { AuthorKeypair } from "../../util/doc-types.ts";
import { SyncCoordinator } from "../../syncer/sync-coordinator.ts";
import { makeSyncerBag } from "../../syncer/_syncer-bag.ts";
import { makeNReplicas, storageHasAllStoragesDocs } from "../test-utils.ts";
import { sleep } from "../../util/misc.ts";

// after start()
//   does it determine the common shares?
//   does it determine the partner's peerId?
//   has the peer acquired the other peer's docs?

// after pullDocs
//   have the expect docs been ingested?

// after close()
//   Does it leave hanging ops?

Deno.test("SyncCoordinator", async () => {
    //const time = new FakeTime();

    // Set up two peers with two shares in common
    // And different sets of docs.
    const keypairA = await Crypto.generateAuthorKeypair("suzy") as AuthorKeypair;
    const keypairB = await Crypto.generateAuthorKeypair("devy") as AuthorKeypair;

    const ADDRESS_A = "+apples.a123";
    const ADDRESS_B = "+bananas.b234";
    const ADDRESS_C = "+coconuts.c345";
    const ADDRESS_D = "+dates.d456";

    const [storageA1, storageA2] = makeNReplicas(ADDRESS_A, 2);
    const [storageB1] = makeNReplicas(ADDRESS_B, 1);
    const [storageC2] = makeNReplicas(ADDRESS_C, 1);
    const [storageD1, storageD2] = makeNReplicas(ADDRESS_D, 2);

    const peer = new Peer();
    const targetPeer = new Peer();

    peer.addReplica(storageA1);
    peer.addReplica(storageB1);
    peer.addReplica(storageD1);

    targetPeer.addReplica(storageA2);
    targetPeer.addReplica(storageC2);
    targetPeer.addReplica(storageD2);

    await storageA1.set(keypairA, {
        content: "Cider",
        path: "/apples/uses.txt",
        format: "es.4",
    });

    await storageA2.set(keypairB, {
        content: "Pears",
        path: "/apples/similar.txt",
        format: "es.4",
    });

    await storageD1.set(keypairA, {
        content: "Chewy",
        path: "/dates/texture.txt",
        format: "es.4",
    });

    await storageD2.set(keypairB, {
        content: "Sticky",
        path: "/dates/texture.txt",
        format: "es.4",
    });

    // Set up a coordinator with the two peers

    const localTransport = new Rpc.TransportLocal({
        deviceId: peer.peerId,
        description: `Local:${peer.peerId}`,
        methods: makeSyncerBag(peer),
    });

    const targetTransport = new Rpc.TransportLocal({
        deviceId: targetPeer.peerId,
        description: `Local:${targetPeer.peerId}`,
        methods: makeSyncerBag(targetPeer),
    });

    const { thisConn } = localTransport.addConnection(targetTransport);

    const coordinator = new SyncCoordinator(peer, thisConn);

    // Start it up

    await coordinator.start();

    await sleep(100);

    assertEquals(coordinator.commonShares, [ADDRESS_A, ADDRESS_D]);
    assert(
        await storageHasAllStoragesDocs(storageA1, storageA2),
        `${ADDRESS_A} storages are synced.`,
    );
    assert(
        await storageHasAllStoragesDocs(storageD1, storageD2),
        `${ADDRESS_D} storages are synced.`,
    );

    // How can I check if timers were set up...

    await storageA2.set(keypairB, {
        content: "Bruises easily!",
        path: "/apples/problems.txt",
        format: "es.4",
    });

    // Advance time by 10 seconds
    await sleep(3000);
    // Have to do this. Thought the fake time thing would take care of it.
    await sleep(0);
    assert(
        await storageHasAllStoragesDocs(storageA1, storageA2),
        `${ADDRESS_A} storages are synced (again).`,
    );

    // Close up

    coordinator.close();
    localTransport.close();
    targetTransport.close();
});


import t = require('tap');
import { onFinishOneTest } from '../browser-run-exit';
import { doesNotThrow, throws } from '../test-utils';
//t.runOnly = true;

let TEST_NAME = 'gardenerHttpServer';

// Boilerplate to help browser-run know when this test is completed.
// When run in the browser we'll be running tape, not tap, so we have to use tape's onFinish function.
/* istanbul ignore next */ 
(t.test as any)?.onFinish?.(() => onFinishOneTest(TEST_NAME));

import { Logger, setDefaultLogLevel } from '../../util/log';
let logger = new Logger('peer', 'white');
let J = JSON.stringify;
setDefaultLogLevel(3);

//================================================================================

import { FormatValidatorEs4 } from '../../format-validators/format-validator-es4';
import { StorageAsync } from '../../storage/storage-async';
import { StorageDriverAsyncMemory } from '../../storage/storage-driver-async-memory';
import { WorkspaceAddress } from '../../util/doc-types';
import { GardenerHttpServer } from '../../peer/gardener-http-server';
import { Peer } from '../../peer/peer';
import { sleep } from '../../util/misc';

//================================================================================

t.test(TEST_NAME + ': basics', async (t: any) => {

    let peer = new Peer();

    let workspace: WorkspaceAddress = '+gardening.oaifrjaoifj';
    let storage = new StorageAsync(
        workspace,
        FormatValidatorEs4,
        new StorageDriverAsyncMemory(workspace)
    );
    peer.addStorage(storage);

    logger.log('------------------------------------------ add gardener and hatch peer');
    await peer.addGardener(new GardenerHttpServer(peer, 8080));
    await peer.hatch();

    logger.log('------------------------------------------ remove gardener and close peer');
    await sleep(100);
    await peer.removeGardener('HTTP_SERVER');
    await peer.close();

    logger.log('------------------------------------------ done');
    t.end();
});

import t = require('tap');
import { onFinishOneTest } from '../browser-run-exit';

import { Lifecycle, LifecycleBase } from '../../util/lifecycle';

let TEST_NAME = 'lifecycle';

// Boilerplate to help browser-run know when this test is completed.
// When run in the browser we'll be running tape, not tap, so we have to use tape's onFinish function.
/* istanbul ignore next */ 
(t.test as any)?.onFinish?.(() => onFinishOneTest(TEST_NAME));

//--------------------------------------------------
import {
    LogLevel,
    Logger,
    setDefaultLogLevel,
    setLogLevel
} from '../../util/log';
import { sleep } from '../../util/misc';

let logger = new Logger('test', 'whiteBright');
let loggerProm = new Logger('testProm', 'magenta');

//setDefaultLogLevel(LogLevel.None);
//setLogLevel('lifecycle', LogLevel.Debug);
//setLogLevel('test', LogLevel.Debug);
//setLogLevel('testProm', LogLevel.Debug);

//================================================================================

t.test('lifecycle basics', async (t: any) => {

    logger.debug('instantiate --------------');
    t.ok(true, '--- instantiate ---');
    let lc = new LifecycleBase();

    t.same(lc.lifecycle, Lifecycle.NEW, 'A. starts off NEW');
    t.notOk(lc.isReady(), 'A. isReady');
    t.notOk(lc.isSortofReady(), 'A. isSortofReady');
    t.notOk(lc.isClosed(), 'A. isClosed');

    //--------------------------------------------------

    logger.debug('hatch --------------');
    t.ok(true, '--- hatch ---');
    await lc.hatch();
    logger.debug('hatch again --------------');
    t.ok(true, '--- hatch ---');
    await lc.hatch();

    t.same(lc.lifecycle, Lifecycle.READY, 'B. is READY after hatch');
    t.ok(lc.isReady(), 'B. isReady');
    t.ok(lc.isSortofReady(), 'B. isSortofReady');
    t.notOk(lc.isClosed(), 'B. isClosed');

    //--------------------------------------------------

    logger.debug('close --------------');
    t.ok(true, '--- close ---');
    await lc.close();
    logger.debug('close again --------------');
    t.ok(true, '--- close ---');
    await lc.close();

    t.same(lc.lifecycle, Lifecycle.CLOSED, 'C. is CLOSED after close');
    t.notOk(lc.isReady(), 'C. isReady');
    t.notOk(lc.isSortofReady(), 'C. isSortofReady');
    t.ok(lc.isClosed(), 'C. isClosed');

    //--------------------------------------------------

    logger.debug('done --------------');
    t.ok(true, '--- done ---');
    t.end();
});
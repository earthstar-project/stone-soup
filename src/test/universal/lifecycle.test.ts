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

    t.ok(true, '--- instantiate ---');
    let lc = new LifecycleBase();

    t.same(lc.lifecycle, Lifecycle.NEW, 'A. starts off NEW');
    t.notOk(lc.isReady(), 'A. isReady');
    t.notOk(lc.isLooselyReady(), 'A. isSortofReady');
    t.notOk(lc.isClosed(), 'A. isClosed');

    //--------------------------------------------------

    t.ok(true, '--- hatch ---');
    await lc.hatch();
    t.ok(true, '--- hatch ---');
    await lc.hatch();

    t.same(lc.lifecycle, Lifecycle.READY, 'B. is READY after hatch');
    t.ok(lc.isReady(), 'B. isReady');
    t.ok(lc.isLooselyReady(), 'B. isSortofReady');
    t.notOk(lc.isClosed(), 'B. isClosed');

    //--------------------------------------------------

    t.ok(true, '--- close ---');
    await lc.close();
    t.ok(true, '--- close ---');
    await lc.close();

    t.same(lc.lifecycle, Lifecycle.CLOSED, 'C. is CLOSED after close');
    t.notOk(lc.isReady(), 'C. isReady');
    t.notOk(lc.isLooselyReady(), 'C. isSortofReady');
    t.ok(lc.isClosed(), 'C. isClosed');

    //--------------------------------------------------

    logger.debug('done --------------');
    t.ok(true, '--- done ---');
    t.end();
});

t.test('lifecycle ready promise and bus events', async (t: any) => {
    let lc = new LifecycleBase();

    let logs: string[] = ['-start'];

    //------------------------------

    lc.bus.on('hatching', () => {
        t.same(Lifecycle[lc.lifecycle], 'HATCHING', 'on hatching, lifecycle is HATCHING');
        logs.push('on-hatching');
    });

    lc.bus.on('ready', () => {
        t.same(Lifecycle[lc.lifecycle], 'READY', 'on ready, lifecycle is READY');
        logs.push('on-ready');
    });
    
    lc.bus.on('closing', () => {
        t.same(Lifecycle[lc.lifecycle], 'CLOSING', 'on closing, lifecycle is CLOSING');
        logs.push('on-closing');
    });

    lc.bus.on('closed', () => {
        t.same(Lifecycle[lc.lifecycle], 'CLOSED', 'on closed, lifecycle is CLOSED');
        logs.push('on-closed');
    });

    //------------------------------

    lc.ready.then(() => {
        t.same(Lifecycle[lc.lifecycle], 'READY', 'await ready, lifecycle is READY');
        logs.push('await-ready');
    });

    //------------------------------

    t.ok(true, '--- hatch ---');
    logs.push('-hatch');
    await lc.hatch();

    //------------------------------

    t.ok(true, '--- close ---');
    logs.push('-close');
    await lc.close();

    logs.push('-sleep');
    await sleep(50);

    logs.push('-end');

    //------------------------------

    let expectedLogs: string[] = [
        '-start',
        '-hatch',
        'on-hatching',
        'on-ready',
        'await-ready',
        '-close',
        'on-closing',
        'on-closed',
        '-sleep',
        '-end',
    ];
    t.same(logs, expectedLogs, 'logs are as expected');

    t.end();
});

class BadHatcher extends LifecycleBase<'ok'> {
    constructor() { super(); }
    async doHatch() {
        throw new Error('kaboom');
    }
}

t.test('lifecycle error during doHatch', async (t: any) => {
    let bh = new BadHatcher();

    setTimeout(async () => {
        try {
            await bh.hatch();
            t.ok(false, 'hatch() should have thrown');
        } catch (err) {
            t.ok(true, 'hatch() threw as expected');
        }
    }, 20);

    try {
        await bh.ready;
        t.ok(false, 'ready should have thrown');
    } catch (err) {
        t.ok(true, 'ready threw as expected');
    }

    await sleep(60);

    t.end();
});

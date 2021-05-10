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

/*
t.test('wtf', async (t: any) => {
    t.plan(3);
    t.ok(true, 'start wtf');

    let p = Promise.resolve();
    p.then(() => {
        t.ok(true, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz 1');
    });

    //queueMicrotask(() => {
    //    t.ok(true, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz 1');
    //});
    //queueMicrotask(async () => {
    //    await sleep(1);
    //    t.ok(true, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz 2');
    //});
    //setTimeout(() => {
    //    t.ok(true, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz 3');
    //}, 10);

    //await sleep(50);

    t.ok(true, 'end wtf');
    //t.end();
});
*/

t.test('lifecycle basics', async (t: any) => {

    logger.debug('instantiate --------------');
    t.ok(true, '--- instantiate ---');
    let lc = new LifecycleBase();

    t.same(lc.lifecycle, Lifecycle.NEW, 'A. starts off NEW');
    t.notOk(lc.isReady(), 'A. isReady');
    t.notOk(lc.isSortofReady(), 'A. isSortofReady');
    t.notOk(lc.isClosed(), 'A. isClosed');

    // will run now, when NEW
    let lcnow = Lifecycle[lc.lifecycle];
    t.ok(true, `> then() setup is running during ${lcnow}`);
    t.same(Lifecycle[lc.lifecycle], 'NEW', '> now is NEW');
    loggerProm.debug(`> then() is running during ${lcnow}`);
    lc.ready.then(() => {
        // should happen
        let msg = `>    then() lc.ready promise set when ${lcnow}; now ${Lifecycle[lc.lifecycle]}; resolved`;
        t.ok(true, msg);
        loggerProm.debug(msg);
        t.same(Lifecycle[lc.lifecycle], 'READY', '>    lc is currently READY');
    }).catch(() => {
        // should NOT happen
        let msg = `>    then() lc.ready promise set when ${lcnow}; now ${Lifecycle[lc.lifecycle]}; REJECTED`;
        t.ok(false, msg);
        loggerProm.debug(msg);
        t.same(Lifecycle[lc.lifecycle], 'READY', '>    lc is currently READY');
    });

    // will run when HATCHING
    queueMicrotask(async () => {
        let lcnow = Lifecycle[lc.lifecycle];
        t.ok(true, `| microtask is running during ${lcnow}`);
        t.same(Lifecycle[lc.lifecycle], 'HATCHING', '| now is HATCHING');
        loggerProm.debug(`| microtask is running during ${lcnow}`);
        try {
            await lc.ready;
            let msg = `|    microtask lc.ready promise set when ${lcnow}; now ${Lifecycle[lc.lifecycle]}; resolved`;
            t.ok(true, msg);
            loggerProm.debug(msg);
            t.same(Lifecycle[lc.lifecycle], 'READY', '|    lc is currently READY');
        } catch (err) {
            let msg = `|    microtask lc.ready promise set when ${lcnow}; now ${Lifecycle[lc.lifecycle]}; REJECTED`;
            t.ok(false, msg);
            loggerProm.debug(msg);
            t.same(Lifecycle[lc.lifecycle], 'READY', '|    lc is currently READY');
        }
    });

    // will run when CLOSED
    setTimeout(async () => {
        let lcnow = Lifecycle[lc.lifecycle];
        t.ok(true, `/ settimeout is running during ${lcnow}`);
        t.same(Lifecycle[lc.lifecycle], 'CLOSED', '/ now is CLOSED');
        loggerProm.debug(`/ settimeout is running during ${lcnow}`);
        try {
            await lc.ready;
            let msg = `/    settimeout lc.ready promise set when ${lcnow}; now ${Lifecycle[lc.lifecycle]}; resolved`;
            t.ok(false, msg);
            loggerProm.debug(msg);
            t.same(Lifecycle[lc.lifecycle], 'CLOSED', '/    lc is currently CLOSED');
        } catch (err) {
            let msg = `/    settimeout lc.ready promise set when ${lcnow}; now ${Lifecycle[lc.lifecycle]}; REJECTED`;
            t.ok(true, msg);
            loggerProm.debug(msg);
            t.same(Lifecycle[lc.lifecycle], 'CLOSED', '/    lc is currently CLOSED');
        }
    }, 45);

    // will run when CLOSED
    setTimeout(async () => {
        let lcnow = Lifecycle[lc.lifecycle];
        t.ok(true, `/ settimeout is running during ${lcnow}`);
        loggerProm.debug(`/ settimeout is running during ${lcnow}`);
        try {
            await lc.ready;
            let msg = `/    settimeout lc.ready promise set when ${lcnow}; now ${Lifecycle[lc.lifecycle]}; resolved`;
            t.ok(false, msg);
            loggerProm.debug(msg);
            t.same(Lifecycle[lc.lifecycle], 'CLOSED', '/    lc is currently CLOSED');
        } catch (err) {
            let msg = `/    settimeout lc.ready promise set when ${lcnow}; now ${Lifecycle[lc.lifecycle]}; REJECTED`;
            t.ok(true, msg);
            loggerProm.debug(msg);
            t.same(Lifecycle[lc.lifecycle], 'CLOSED', '/    lc is currently CLOSED');
        }
    }, 50);

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

    // will run now, when READY
    let lcnow2 = Lifecycle[lc.lifecycle];
    t.ok(true, `< then() setup is running during ${lcnow2}`);
    t.same(Lifecycle[lc.lifecycle], 'READY', '< now is READY');
    loggerProm.debug(`< then() is running during ${lcnow2}`);
    lc.ready.then(() => {
        // should happen
        let msg = `<    then() lc.ready promise set when ${lcnow2}; now ${Lifecycle[lc.lifecycle]}; resolved`;
        t.ok(true, msg);
        loggerProm.debug(msg);
        t.same(Lifecycle[lc.lifecycle], 'READY', '<    lc is currently READY');
    }).catch(() => {
        // should NOT happen
        let msg = `<    then() lc.ready promise set when ${lcnow2}; now ${Lifecycle[lc.lifecycle]}; REJECTED`;
        t.ok(false, msg);
        loggerProm.debug(msg);
        t.same(Lifecycle[lc.lifecycle], 'READY', '<    lc is currently READY');
    });
    await sleep(1);

    // will run when CLOSING
    let lcnow4 = Lifecycle[lc.lifecycle];
    t.ok(true, `! then() setup is running during ${lcnow4}`);
    t.same(Lifecycle[lc.lifecycle], 'READY', '! now is READY');
    loggerProm.debug(`! then() is running during ${lcnow4}`);
    lc.ready.then(() => {
        // should NOT happen
        let msg = `!    then() lc.ready promise set when ${lcnow4}; now ${Lifecycle[lc.lifecycle]}; resolved`;
        t.ok(false, msg);
        loggerProm.debug(msg);
        t.same(Lifecycle[lc.lifecycle], 'CLOSING', '!    lc is currently CLOSING');
    }).catch(() => {
        // should happen
        let msg = `!    then() lc.ready promise set when ${lcnow4}; now ${Lifecycle[lc.lifecycle]}; REJECTED`;
        t.ok(true, msg);
        loggerProm.debug(msg);
        t.same(Lifecycle[lc.lifecycle], 'CLOSING', '!    lc is currently CLOSING');
    });

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

    // will run now, when CLOSED
    let lcnow3 = Lifecycle[lc.lifecycle];
    t.ok(true, `<> then() setup is running during ${lcnow3}`);
    t.same(Lifecycle[lc.lifecycle], 'CLOSED', '<> now is CLOSED');
    loggerProm.debug(`< then() is running during ${lcnow3}`);
    lc.ready.then(() => {
        // should happen
        let msg = `<>    then() lc.ready promise set when ${lcnow3}; now ${Lifecycle[lc.lifecycle]}; resolved`;
        t.ok(false, msg);
        loggerProm.debug(msg);
        t.same(Lifecycle[lc.lifecycle], 'CLOSED', '<>    lc is currently CLOSED');
    }).catch(() => {
        // should NOT happen
        let msg = `<>    then() lc.ready promise set when ${lcnow3}; now ${Lifecycle[lc.lifecycle]}; REJECTED`;
        t.ok(true, msg);
        loggerProm.debug(msg);
        t.same(Lifecycle[lc.lifecycle], 'CLOSED', '<>    lc is currently CLOSED');
    });

    await sleep(100);

    logger.debug('done --------------');
    t.ok(true, '--- done ---');
    t.end();
});
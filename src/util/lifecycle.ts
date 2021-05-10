import { LifecyleError } from './errors';
import { Superbus } from 'superbus/build';
import { Deferred, makeDeferred } from '../storage/lock';

//--------------------------------------------------

import { Logger } from './log';
let logger = new Logger('lifecycle', 'blue');
let J = JSON.stringify;

//================================================================================

/**
 * 
 * A linear sequence of states for the state machine
 * which can only increase, never move backward.
 */
export enum Lifecycle {
    NEW = 0,       // just instantiated
    HATCHING = 1,  // ...temporary, while hatch() is in progress
    READY = 2,     // normal state
    CLOSING = 3,   // ...temporary, while close() is in progress
    CLOSED = 4,    // closd forever, there's no going back
}

export type LifecycleEvents = 'hatching' | 'ready' | 'closing' | 'closed';

/**
 * A base class which has a lifecycle (new, hatching, ready, closing, closed).
 * 
 * T is a string type for extra event channels you want to send to on the 
 * included Superbus instance (at this.bus).
 */
export class LifecycleBase<T extends string> {
    lifecycle: Lifecycle = Lifecycle.NEW;
    bus: Superbus<LifecycleEvents | T>;
    ready: Promise<void>;
    _readyDeferred: Deferred<void>;

    /**
     * Classes which extend this class should remember to call super()
     * in their constructors.
     */
    constructor() {
        logger.debug('constructor');
        this.bus = new Superbus<LifecycleEvents | T>();
        this._readyDeferred = makeDeferred<void>();
        this.ready = this._readyDeferred.promise;
    }

    /**
     * Users of this class should call "await hatch" after instantiating it
     * and before trying to use it.
     * 
     * `hatch()` returns `this` for easy chaining:
     * 
     *     `let thing = await new Thing().hatch()`
     */
    async hatch() {
        logger.debug('hatch');

        // enforce state machine
        if (this.lifecycle === Lifecycle.HATCHING || this.lifecycle === Lifecycle.READY) {
            // Calling hatch while already hatching or ready just does nothing.
            logger.debug(`...lifecycle is ${Lifecycle[this.lifecycle]} -- ignoring hatch attempt.`);
            return;
        } else if (this.lifecycle === Lifecycle.CLOSING || this.lifecycle === Lifecycle.CLOSED) {
            // Not ok to hatch when closing or closed -- that would be going backwards,
            // so throw an error
            logger.debug(`...lifecycle is ${Lifecycle[this.lifecycle]} -- throwing an error.`);
            throw new LifecyleError(`Can't call hatch() when instance is already ${Lifecycle[this.lifecycle]}`);
        }
        // otherwise, lifecycle is NEW and we can hatch.

        // Do the actual hatching
        logger.debug('...our state is now HATCHING');
        this.lifecycle = Lifecycle.HATCHING;

        logger.debug('...sending "hatching" event, blockingly');
        await this.bus.sendAndWait('hatching');

        logger.debug('...calling doHatch of subclass');
        let hatchErr: any = undefined;
        try {
            await this.doHatch();
        } catch (err) {
            hatchErr = err;
        }
        logger.debug('...done calling getHatched');

        logger.debug('...our state is now READY');
        this.lifecycle = Lifecycle.READY;

        logger.debug('...sending "ready" event');
        await this.bus.sendAndWait('ready');

        logger.debug('...resolving "ready" promise');
        if (hatchErr !== undefined) {
            this._readyDeferred.reject(hatchErr);
        } else {
            this._readyDeferred.resolve();
        }

        logger.debug('...done hatching');
        return this;
    }

    /**
     * Override this function in your subclass -- it's what should
     * happen during hatching.
     */
    async doHatch() {
        logger.debug('getHatched -- override me');
    }

    async close() {
        logger.debug('close');

        // Enforce state machine.
        // It's always safe to call close no matter what lifecycle state you're in.
        // It just does nothing unless you're READY.
        // TODO: can you close something that's NEW or HATCHING?
        if (this.lifecycle === Lifecycle.NEW || this.lifecycle === Lifecycle.HATCHING) {
            logger.debug(`...called close() when lifecycle is ${Lifecycle[this.lifecycle]}; that is not allowed`);
            throw new LifecyleError(`called close() when lifecycle is ${Lifecycle[this.lifecycle]}; that is not allowed`);
        }
        if (this.lifecycle !== Lifecycle.READY) {
            logger.debug(`...doing nothing because lifecycle is ${Lifecycle[this.lifecycle]}`);
            return;
        }

        logger.debug('...lifecycle is now CLOSING');
        this.lifecycle = Lifecycle.CLOSING;

        logger.debug('...sending "closing" event, blockingly');
        await this.bus.sendAndWait('closing');

        logger.debug('...calling getClosed');
        await this.doClose();
        logger.debug('...done calling getClosed');

        logger.debug('...lifecycle is now CLOSED');
        this.lifecycle = Lifecycle.CLOSED;

        logger.debug('...sending "closed" event, blockingly');
        await this.bus.sendAndWait('closed');

        logger.debug('...done closing');
    }

    /**
     * Override this function in your subclass -- it's what should
     * happen during closing.
     */
    async doClose() {
        logger.debug('getClosed -- override me');
    }

    isReady() { return this.lifecycle === Lifecycle.READY; }
    isClosed() { return this.lifecycle === Lifecycle.CLOSED; }
    isLooselyReady() {
        // Return true if we're in the HATCHING, READY, or CLOSING state.
        // and false if we're NEW or CLOSED.
        // This is for functions that need to run during those hatching or closing times.
        return this.lifecycle === Lifecycle.HATCHING ||
            this.lifecycle === Lifecycle.READY ||
            this.lifecycle === Lifecycle.CLOSING;
    }
    _throwIfNotReady() {
        if (!this.isReady()) { throw new LifecyleError(`lifecycle is ${Lifecycle[this.lifecycle]} instead of READY`); }
    }
    _throwIfNotLooselyReady() {
        if (!this.isLooselyReady()) { throw new LifecyleError(`lifecycle is ${Lifecycle[this.lifecycle]} but must be HATCHING, READY, or CLOSING.`); }
    }
}

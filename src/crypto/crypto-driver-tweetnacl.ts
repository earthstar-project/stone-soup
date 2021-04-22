import tweetnacl from 'tweetnacl';
import {
    ICryptoDriver,
    KeypairBytes,
} from './crypto-types';
import {
    concatBytes,   
    stringToBytes
} from '../util/bytes';
import { createHash } from 'sha256-uint8array';

/**
 * A verison of the ILowLevelCrypto interface backed by Chloride.
 * Works in the browser.
 */
export const CryptoDriverChloride: ICryptoDriver = class {
    static sha256(input: string | Uint8Array): Uint8Array {
        if (typeof input === 'string') { input = stringToBytes(input); }
        return createHash('sha256').update(input).digest()
    }
    static generateKeypairBytes(seed?: Uint8Array): KeypairBytes {
        // If provided, the seed is used as the secret key.
        // If omitted, a random secret key is generated.
        
        if (!seed) {
            
            seed = tweetnacl.randomBytes(32);
        }
        let keys = tweetnacl.box.keyPair.fromSecretKey(seed);
        return {
            //curve: 'ed25519',
            pubkey: keys.publicKey,
            // so that this works with either sodium or libsodium-wrappers (in browser):
            secret: (keys.secretKey).slice(0, 32),
        };
    };
    static sign(keypairBytes: KeypairBytes, msg: string | Uint8Array): Uint8Array {
        let secret = concatBytes(keypairBytes.secret, keypairBytes.pubkey);
        if (typeof msg === 'string') { msg = stringToBytes(msg); }
        return  tweetnacl.sign.detached(msg, secret)
        ;
    }
    static verify(publicKey: Buffer, sig: Uint8Array, msg: string | Uint8Array): boolean {
        try {
            if (typeof msg === 'string') { msg = stringToBytes(msg); }
            
            return tweetnacl.sign.detached.verify(
                sig,
                msg,
                publicKey,
            );
        } catch (e) {
            return false;
        }
    }
};

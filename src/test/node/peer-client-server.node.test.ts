import { WorkspaceAddress } from '../../util/doc-types';
import { IStorageAsync } from '../../storage/storage-types';

import { CryptoDriverTweetnacl } from '../../crypto/crypto-driver-tweetnacl';
import { FormatValidatorEs4 } from '../../format-validators/format-validator-es4';
import { StorageAsync } from '../../storage/storage-async';

import { storageDriversAsync_nodeAndUniversal } from './platform.node';

import { runPeerClientServerTests } from '../shared-test-code/peer-client-server.shared';
import { runPeerTests } from '../shared-test-code/peer.shared';
import { setGlobalCryptoDriver } from '../../crypto/global-crypto-driver';
import { testScenarios } from '../improved/test-scenarios.node'

//================================================================================

for (let scenario of testScenarios) {
    // just hardcode this crypto driver since it works on all platforms
    let cryptoDriver = CryptoDriverTweetnacl;
    setGlobalCryptoDriver(cryptoDriver);

    let storageDriverName = scenario.name;
    let cryptoDriverName = (cryptoDriver as any).name;
    let description = `${storageDriverName} + ${cryptoDriverName}`;

    let makeStorage = (ws: WorkspaceAddress): IStorageAsync => {
        let storage = new StorageAsync(ws, FormatValidatorEs4, scenario.makeDriver(ws));
        return storage;
    }

    runPeerTests(description, makeStorage);
    runPeerClientServerTests(description, makeStorage);
}

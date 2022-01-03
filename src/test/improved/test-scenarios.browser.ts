// basic earthstar types
import { WorkspaceAddress } from '../../util/doc-types';
import { IStorageDriverAsync } from '../../storage/storage-types';

// specific drivers
import { CryptoDriverNoble } from '../../crypto/crypto-driver-noble';
import { CryptoDriverChloride } from '../../crypto/crypto-driver-chloride';
import { StorageDriverAsyncMemory } from '../../storage/storage-driver-async-memory';
import { StorageDriverLocalStorage } from '../../storage/storage-driver-local-storage';
import { StorageDriverIndexedDB } from '../../storage/storage-driver-indexeddb'

// test types
import { TestScenario } from './test-scenario-types';

//================================================================================

export let testScenarios: TestScenario[] = [
    {
        name: 'StorageDriverAsyncMemory + CryptoDriverNoble',
        cryptoDriver: CryptoDriverNoble,
        persistent: false,
        platforms: { browser: true, node: true, deno: true },
        makeDriver: (ws: WorkspaceAddress): IStorageDriverAsync =>
            new StorageDriverAsyncMemory(ws),
        builtinConfigKeys: []
    },
    {
        name: 'StorageDriverAsyncMemory + CryptoDriverChloride',
        cryptoDriver: CryptoDriverChloride,
        persistent: false,
        platforms: { browser: true, node: true, deno: true },
        makeDriver: (ws: WorkspaceAddress): IStorageDriverAsync =>
            new StorageDriverAsyncMemory(ws),
        builtinConfigKeys: []
    },
    {
        name: 'StorageDriverLocalStorage + CryptoDriverNoble',
        cryptoDriver: CryptoDriverNoble,
        persistent: true,
        platforms: { browser: true, node: false, deno: false },
        makeDriver: (ws: WorkspaceAddress): IStorageDriverAsync =>
            new StorageDriverLocalStorage(ws),
        builtinConfigKeys: []
    },
    {
        name: 'StorageDriverIndexedDB + CryptoDriverNoble',
        cryptoDriver: CryptoDriverNoble,
        persistent: true,
        platforms: { browser: true, node: false, deno: false },
        makeDriver: (ws: WorkspaceAddress): IStorageDriverAsync =>
            new StorageDriverIndexedDB(ws),
        builtinConfigKeys: []
    }
]

//================================================================================

//for (let scenario of scenarios) {
//    runStorageDriverTests(scenario);
//    runStorageConfigTests(scenario);
//    runStorageTests(scenario);
//}
//
// basic earthstar types
import { WorkspaceAddress } from '../../util/doc-types';
import { IStorageDriverAsync } from '../../storage/storage-types';

// specific drivers
import { CryptoDriverNoble } from '../../crypto/crypto-driver-noble';
import { CryptoDriverNode } from '../../crypto/crypto-driver-node';
import { StorageDriverAsyncMemory } from '../../storage/storage-driver-async-memory';
import { StorageDriverSqliteNode } from '../../storage/storage-driver-sqlite-node';

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
            new StorageDriverAsyncMemory(ws)
            , builtinConfigKeys: []
    },
    {
        name: 'StorageDriverAsyncMemory + CryptoDriverNode',
        cryptoDriver: CryptoDriverNode,
        persistent: false,
        platforms: { browser: true, node: true, deno: true },
        makeDriver: (ws: WorkspaceAddress): IStorageDriverAsync =>
            new StorageDriverAsyncMemory(ws),
            builtinConfigKeys: []
    },
    {
        name: 'StorageDriverSqliteNode + CryptoDriverNoble',
        cryptoDriver: CryptoDriverNoble,
        persistent: false,
        platforms: { browser: true, node: true, deno: true },
        makeDriver: (ws: WorkspaceAddress): IStorageDriverAsync =>
            new StorageDriverSqliteNode({
                filename: ':memory:',
                workspace: ws,
                mode: 'create'
            }),
            builtinConfigKeys: ['schemaVersion', 'workspace']
    },
    {
        name: 'StorageDriverSqliteNode + CryptoDriverNode',
        cryptoDriver: CryptoDriverNode,
        persistent: false,
        platforms: { browser: true, node: true, deno: true },
        makeDriver: (ws: WorkspaceAddress): IStorageDriverAsync =>
            new StorageDriverSqliteNode({
                filename: ':memory:',
                workspace: ws,
                mode: 'create'
            }),
            builtinConfigKeys: ['schemaVersion', 'workspace']
    },
    
]

//================================================================================

//for (let scenario of scenarios) {
//    runStorageDriverTests(scenario);
//    runStorageConfigTests(scenario);
//    runStorageTests(scenario);
//}
//
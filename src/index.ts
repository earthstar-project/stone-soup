// All exports here need to have the same type signature
// regardless of the platform used.
// e.g. cryptoDriverNode cannot be exported here.

export { DocValidatorEs4 } from "./docValidators/es4";
export { StorageAsync } from "./storage/storageAsync";
export { StorageDriverAsyncMemory } from "./storage/storageDriverAsyncMemory";
export { Follower, FollowerOpts, addFollower } from "./follower";
export {
  cleanUpQuery,
  CleanUpQueryResult,
  docMatchesFilter,
  WillMatch,
} from "./query";
export {
  checkAuthorIsValid,
  checkWorkspaceIsValid,
  parseAuthorAddress,
  parseAddress,
  parseWorkspaceAddress,
  assembleAuthorAddress,
  assembleWorkspaceAddress,
} from "./coreValidators/addresses";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// src/entries/universal.ts
__markAsModule(exports);
__export(exports, {
  Cmp: () => Cmp,
  ConnectionRefusedError: () => ConnectionRefusedError,
  Crypto: () => Crypto,
  CryptoDriverTweetnacl: () => CryptoDriverTweetnacl,
  DEFAULT_LOG_LEVEL: () => DEFAULT_LOG_LEVEL,
  DEFAULT_QUERY: () => DEFAULT_QUERY,
  EarthstarError: () => EarthstarError,
  FormatValidatorEs4: () => FormatValidatorEs4,
  GlobalCryptoDriver: () => GlobalCryptoDriver,
  LogLevel: () => LogLevel,
  Logger: () => Logger,
  NetworkError: () => NetworkError,
  NotFoundError: () => NotFoundError,
  NotImplementedError: () => NotImplementedError,
  Peer: () => Peer,
  PeerClient: () => PeerClient,
  PeerServer: () => PeerServer,
  QueryFollower: () => QueryFollower,
  QueryFollowerIsClosedError: () => QueryFollowerIsClosedError,
  StorageAsync: () => StorageAsync,
  StorageCache: () => StorageCache,
  StorageDriverAsyncMemory: () => StorageDriverAsyncMemory,
  StorageIsClosedError: () => StorageIsClosedError,
  TimeoutError: () => TimeoutError,
  ValidationError: () => ValidationError,
  alphaLower: () => alphaLower,
  alphaUpper: () => alphaUpper,
  assembleAuthorAddress: () => assembleAuthorAddress,
  assembleWorkspaceAddress: () => assembleWorkspaceAddress,
  authorAddressChars: () => authorAddressChars,
  authorKeyChars: () => authorKeyChars,
  authorNameChars: () => authorNameChars,
  b32chars: () => b32chars,
  b64StringToBytes: () => b64StringToBytes,
  base32BytesToString: () => base32BytesToString,
  base32StringToBytes: () => base32StringToBytes,
  bufferToBytes: () => bufferToBytes,
  bufferToString: () => bufferToString,
  bytesToBuffer: () => bytesToBuffer,
  bytesToString: () => bytesToString,
  checkAuthorIsValid: () => checkAuthorIsValid,
  checkInt: () => checkInt,
  checkIsPlainObject: () => checkIsPlainObject,
  checkLiteral: () => checkLiteral,
  checkObj: () => checkObj,
  checkString: () => checkString,
  checkWorkspaceIsValid: () => checkWorkspaceIsValid,
  cleanUpQuery: () => cleanUpQuery,
  compareArrays: () => compareArrays,
  compareBasic: () => compareBasic,
  compareByFn: () => compareByFn,
  compareByObjArrayFn: () => compareByObjArrayFn,
  compareByObjKey: () => compareByObjKey,
  concatBytes: () => concatBytes,
  decodeAuthorKeypairToBytes: () => decodeAuthorKeypairToBytes,
  deepCopy: () => deepCopy,
  deepEqual: () => deepEqual,
  digits: () => digits,
  docMatchesFilter: () => docMatchesFilter,
  encodeAuthorKeypairToStrings: () => encodeAuthorKeypairToStrings,
  getLogLevel: () => getLogLevel,
  getLogLevels: () => getLogLevels,
  hexStringToBytes: () => hexStringToBytes,
  identifyBufOrBytes: () => identifyBufOrBytes,
  initialPeerClientState: () => initialPeerClientState,
  isBuffer: () => isBuffer,
  isBytes: () => isBytes,
  isDigit: () => isDigit,
  isErr: () => isErr,
  isOnlyPrintableAscii: () => isOnlyPrintableAscii,
  isPlainObject: () => isPlainObject,
  microsecondNow: () => microsecondNow,
  notErr: () => notErr,
  onlyHasChars: () => onlyHasChars,
  parseAddress: () => parseAddress,
  parseAuthorAddress: () => parseAuthorAddress,
  parseWorkspaceAddress: () => parseWorkspaceAddress,
  pathChars: () => pathChars,
  pathPunctuation: () => pathPunctuation,
  randomId: () => randomId,
  saltAndHashWorkspace: () => saltAndHashWorkspace,
  setDefaultLogLevel: () => setDefaultLogLevel,
  setGlobalCryptoDriver: () => setGlobalCryptoDriver,
  setLogLevel: () => setLogLevel,
  sleep: () => sleep,
  sortedInPlace: () => sortedInPlace,
  stringLengthInBytes: () => stringLengthInBytes,
  stringToBuffer: () => stringToBuffer,
  stringToBytes: () => stringToBytes,
  updateLogLevels: () => updateLogLevels,
  workspaceAddressChars: () => workspaceAddressChars,
  workspaceKeyChars: () => workspaceKeyChars,
  workspaceNameChars: () => workspaceNameChars
});

// src/shims/node.ts
var import_util = __toModule(require("util"));

// src/util/errors.ts
var EarthstarError = class extends Error {
  constructor(message) {
    super(message || "");
    this.name = "EarthstarError";
  }
};
var ValidationError = class extends EarthstarError {
  constructor(message) {
    super(message || "Validation error");
    this.name = "ValidationError";
  }
};
var StorageIsClosedError = class extends EarthstarError {
  constructor(message) {
    super(message || "a Storage or StorageDriver was used after being closed");
    this.name = "StorageIsClosedError";
  }
};
var QueryFollowerIsClosedError = class extends EarthstarError {
  constructor(message) {
    super(message || "a QueryFollower was used after being closed");
    this.name = "QueryFollowerIsClosedError";
  }
};
var NotFoundError = class extends EarthstarError {
  constructor(message) {
    super(message || "not found");
    this.name = "NotFoundError";
  }
};
var NetworkError = class extends EarthstarError {
  constructor(message) {
    super(message || "network error");
    this.name = "NetworkError";
  }
};
var TimeoutError = class extends EarthstarError {
  constructor(message) {
    super(message || "timeout error");
    this.name = "TimeoutError";
  }
};
var ConnectionRefusedError = class extends EarthstarError {
  constructor(message) {
    super(message || "connection refused");
    this.name = "ConnectionRefused";
  }
};
var NotImplementedError = class extends EarthstarError {
  constructor(message) {
    super(message || "not implemented yet");
    this.name = "NotImplementedError";
  }
};
var isErr = (x) => x instanceof EarthstarError;
var notErr = (x) => !(x instanceof EarthstarError);

// src/util/buffers.ts
var bytesToBuffer = (bytes) => Buffer.from(bytes);
var bufferToBytes = (buf) => new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
var stringToBuffer = (str) => Buffer.from(str, "utf-8");
var bufferToString = (buf) => buf.toString("utf-8");

// src/util/bytes.ts
var decoder = new import_util.TextDecoder();
var encoder = new import_util.TextEncoder();
var bytesToString = (bytes) => decoder.decode(bytes);
var stringToBytes = (str) => encoder.encode(str);
var stringLengthInBytes = (str) => stringToBytes(str).length;
var concatBytes = (a, b) => {
  if (!b || b.length === 0) {
    return a;
  }
  if (!a || a.length === 0) {
    return b;
  }
  var c = new Uint8Array(a.length + b.length);
  c.set(a);
  c.set(b, a.length);
  return c;
};
var b64StringToBytes = (b64string) => bufferToBytes(Buffer.from(b64string, "base64"));
var hexStringToBytes = (hexString) => bufferToBytes(Buffer.from(hexString, "hex"));
var isBytes = (bytes) => {
  var _a2;
  return ((_a2 = bytes == null ? void 0 : bytes.constructor) == null ? void 0 : _a2.name) === "Uint8Array";
};
var isBuffer = (buf) => {
  var _a2;
  return ((_a2 = buf == null ? void 0 : buf.constructor) == null ? void 0 : _a2.name) === "Buffer";
};
var identifyBufOrBytes = (bufOrBytes) => {
  if (isBytes(bufOrBytes)) {
    return "bytes";
  }
  if (isBuffer(bufOrBytes)) {
    return "buffer";
  }
  return "?";
};

// src/core-validators/characters.ts
var onlyHasChars = (str, allowedChars) => {
  for (let s of str) {
    if (allowedChars.indexOf(s) === -1) {
      return false;
    }
  }
  return true;
};
var isOnlyPrintableAscii = (s) => {
  let bytes = stringToBytes(s);
  for (let byte of bytes) {
    if (byte < 32 || byte > 126) {
      return false;
    }
  }
  return true;
};
var isDigit = (ch) => {
  if (ch === "") {
    return false;
  }
  return digits.indexOf(ch) !== -1;
};
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = alphaLower.toUpperCase();
var digits = "0123456789";
var b32chars = alphaLower + "234567";
var authorNameChars = alphaLower + digits;
var authorKeyChars = b32chars;
var authorAddressChars = authorNameChars + b32chars + "@.";
var workspaceNameChars = alphaLower + digits;
var workspaceKeyChars = alphaLower + digits;
var workspaceAddressChars = workspaceNameChars + b32chars + "+.";
var pathPunctuation = "/'()-._~!$&+,:=@%";
var pathChars = alphaLower + alphaUpper + digits + pathPunctuation;

// src/core-validators/addresses.ts
var assembleAuthorAddress = (name, encodedPubkey) => `@${name}.${encodedPubkey}`;
var assembleWorkspaceAddress = (name, encodedPubkey) => `+${name}.${encodedPubkey}`;
var checkAuthorIsValid = (addr) => {
  let parsed = parseAuthorAddress(addr);
  if (notErr(parsed)) {
    return true;
  }
  return parsed;
};
var checkWorkspaceIsValid = (addr) => {
  let parsed = parseWorkspaceAddress(addr);
  if (notErr(parsed)) {
    return true;
  }
  return parsed;
};
var parseAuthorAddress = (address) => {
  return parseAddress(address, {
    sigil: "@",
    separator: ".",
    minNameLength: 4,
    maxNameLength: 4,
    minPubkeyLength: 53,
    maxPubkeyLength: 53,
    allowedNameCharacters: authorNameChars,
    allowedPubkeyCharacters: authorKeyChars,
    pubkeyMustStartWithB: true
  });
};
var parseWorkspaceAddress = (address) => {
  return parseAddress(address, {
    sigil: "+",
    separator: ".",
    minNameLength: 1,
    maxNameLength: 15,
    minPubkeyLength: 1,
    maxPubkeyLength: 53,
    allowedNameCharacters: workspaceNameChars,
    allowedPubkeyCharacters: workspaceKeyChars,
    pubkeyMustStartWithB: false
  });
};
var parseAddress = (address, opts) => {
  let {
    sigil,
    separator,
    minNameLength,
    maxNameLength,
    minPubkeyLength,
    maxPubkeyLength,
    allowedNameCharacters,
    allowedPubkeyCharacters,
    pubkeyMustStartWithB
  } = opts;
  if (typeof address !== "string") {
    return new ValidationError("address must be a string");
  }
  if (address.length < 4) {
    return new ValidationError("address is too short");
  }
  if (address[0] !== sigil) {
    return new ValidationError(`address must start with a sigil: "${sigil}"`);
  }
  if (address.indexOf(separator) === -1) {
    return new ValidationError(`address must contain a separator character: "${separator}"`);
  }
  let parts = address.slice(1).split(separator);
  if (parts.length !== 2) {
    return new ValidationError(`address must have exactly 2 parts separated by a "${separator}" separator`);
  }
  let [name, pubkey] = parts;
  if (name.length < minNameLength || name.length > maxNameLength) {
    return new ValidationError(`name must be between ${minNameLength} and ${maxNameLength} characters long, but is ${name.length}`);
  }
  if (pubkey.length < minPubkeyLength || pubkey.length > maxPubkeyLength) {
    return new ValidationError(`pubkey must be between ${minPubkeyLength} and ${maxPubkeyLength} characters long, but is ${pubkey.length}`);
  }
  if (!onlyHasChars(name, allowedNameCharacters)) {
    return new ValidationError(`name "${name}" must only have allowed characters`);
  }
  if (!onlyHasChars(pubkey, allowedPubkeyCharacters)) {
    return new ValidationError(`pubkey "${pubkey}" must only have allowed characters`);
  }
  if (isDigit(name[0])) {
    return new ValidationError(`name "${name}" must not start with a digit`);
  }
  if (isDigit(pubkey[0])) {
    return new ValidationError(`pubkey "${pubkey}" must not start with a digit`);
  }
  if (pubkeyMustStartWithB && pubkey[0] !== "b") {
    return new ValidationError(`pubkey "${pubkey}" must start with 'b'`);
  }
  return {
    address,
    name,
    pubkey
  };
};

// src/core-validators/checkers.ts
var isPlainObject = (obj) => {
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    return false;
  }
  if (("" + obj.constructor).startsWith("class")) {
    return false;
  }
  return true;
};
var checkIsPlainObject = (x) => isPlainObject(x) ? null : "expected plain object but got " + x;
var checkLiteral = (val) => (x) => {
  if (x !== val) {
    return `expected literal value ${JSON.stringify(val)}`;
  }
  return null;
};
var checkString = (opts = {}) => (x) => {
  if (opts.optional !== true && x === void 0) {
    return "required";
  }
  if (opts.optional === true && x === void 0) {
    return null;
  }
  let len = stringLengthInBytes(x);
  if (typeof x !== "string") {
    return "expected a string but got " + JSON.stringify(x);
  }
  if (opts.minLen !== void 0 && len < opts.minLen) {
    return `string shorter than min length of ${opts.minLen} chars`;
  }
  if (opts.maxLen !== void 0 && len > opts.maxLen) {
    return `string shorter than max length of ${opts.maxLen} chars`;
  }
  if (opts.len !== void 0 && len !== opts.len) {
    return `string does not have required length of ${opts.len} chars: ${x}`;
  }
  if (opts.allowedChars !== void 0 && !onlyHasChars(x, opts.allowedChars)) {
    return "contains disallowed characters";
  }
  return null;
};
var checkInt = (opts = {}) => (x) => {
  if (opts.optional !== true && x === void 0) {
    return "required";
  }
  if (opts.optional === true && x === void 0) {
    return null;
  }
  if (opts.nullable !== true && x === null) {
    return "not nullable";
  }
  if (opts.nullable === true && x === null) {
    return null;
  }
  if (typeof x !== "number") {
    return "expected a number but got " + JSON.stringify(x);
  }
  if (isNaN(x)) {
    return "is NaN";
  }
  if (!isFinite(x)) {
    return "is Infinity";
  }
  if (x !== Math.round(x)) {
    return "expected an integer";
  }
  if (opts.min !== void 0 && x < opts.min) {
    return `integer too small (must be >= ${opts.min})`;
  }
  if (opts.max !== void 0 && x > opts.max) {
    return `integer too large (must be <= ${opts.max})`;
  }
  return null;
};
var checkObj = (opts = {}) => {
  var _a2, _b;
  opts.allowLiteralUndefined = (_a2 = opts.allowLiteralUndefined) != null ? _a2 : false;
  opts.allowExtraKeys = (_b = opts.allowExtraKeys) != null ? _b : false;
  return (x) => {
    if (!isPlainObject(x)) {
      return "expected an object";
    }
    if (opts.allowLiteralUndefined === false) {
      for (let [k, v] of Object.entries(x)) {
        if (v === void 0) {
          return `${k} is explicitly set to undefined but should be missing instead`;
        }
      }
    }
    if (opts.objSchema !== void 0) {
      if (opts.allowExtraKeys === false) {
        let objKeys = Object.keys(x);
        let schemaKeys = Object.keys(opts.objSchema);
        let extraObjKeys = objKeys.filter((k) => schemaKeys.indexOf(k) === -1);
        if (extraObjKeys.length > 0) {
          return `object has extra keys not in the schema: ${extraObjKeys.join(", ")}`;
        }
      }
      for (let [key, validator] of Object.entries(opts.objSchema)) {
        let err = validator(x[key]);
        if (err !== null) {
          return `${key}: ${err}`;
        }
      }
    }
    return null;
  };
};

// src/crypto/base32.ts
var import_rfc4648 = __toModule(require("rfc4648"));
var myEncoding = {
  chars: "abcdefghijklmnopqrstuvwxyz234567",
  bits: 5
};
var base32BytesToString = (bytes) => "b" + import_rfc4648.codec.stringify(bytes, myEncoding, {pad: false});
var base32StringToBytes = (str) => {
  if (!str.startsWith("b")) {
    throw new ValidationError("can't decode base32 string - it should start with a 'b'. " + str);
  }
  if (str[str.length - 1] === "=") {
    throw new ValidationError("can't decode base32 string - it contains padding characters ('=')");
  }
  return import_rfc4648.codec.parse(str.slice(1), myEncoding, {loose: true});
};

// src/crypto/crypto-driver-tweetnacl.ts
var import_tweetnacl = __toModule(require("tweetnacl"));
var import_sha256_uint8array = __toModule(require("sha256-uint8array"));

// src/util/log.ts
var import_chalk = __toModule(require("chalk"));
var LogLevel;
(function(LogLevel4) {
  LogLevel4[LogLevel4["None"] = -1] = "None";
  LogLevel4[LogLevel4["Error"] = 0] = "Error";
  LogLevel4[LogLevel4["Warn"] = 1] = "Warn";
  LogLevel4[LogLevel4["Log"] = 2] = "Log";
  LogLevel4[LogLevel4["Info"] = 3] = "Info";
  LogLevel4[LogLevel4["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var DEFAULT_LOG_LEVEL = 0;
var globalLogLevels = {
  _default: DEFAULT_LOG_LEVEL
};
var updateLogLevels = (newLogLevels) => {
  globalLogLevels = __spreadValues(__spreadValues({}, globalLogLevels), newLogLevels);
};
var setLogLevel = (source, level) => {
  globalLogLevels[source] = level;
};
var setDefaultLogLevel = (level) => {
  globalLogLevels._default = level;
};
var getLogLevel = (source) => {
  if (source in globalLogLevels) {
    return globalLogLevels[source];
  } else {
    return globalLogLevels._default;
  }
};
var getLogLevels = () => globalLogLevels;
var Logger = class {
  constructor(source, color) {
    this.color = void 0;
    this.source = source;
    this.color = color || "blueBright";
  }
  _print(level, showTag, indent, ...args) {
    if (level <= getLogLevel(this.source)) {
      if (showTag) {
        let tag = `[${this.source}]`;
        if (this.color !== void 0) {
          tag = import_chalk.default[this.color](tag);
        }
        console.log(indent, tag, ...args);
      } else {
        console.log(indent, ...args);
      }
    }
  }
  error(...args) {
    this._print(0, true, "!!", ...args);
  }
  warn(...args) {
    this._print(1, true, "! ", ...args);
  }
  log(...args) {
    this._print(2, true, "  ", ...args);
  }
  info(...args) {
    this._print(3, true, "    ", ...args);
  }
  debug(...args) {
    this._print(4, true, "      ", ...args);
  }
  blank() {
    this._print(3, false, "");
  }
};

// src/crypto/crypto-driver-tweetnacl.ts
var logger = new Logger("crypto-driver-tweetnacl", "cyan");
var CryptoDriverTweetnacl = class {
  static sha256(input) {
    if (typeof input === "string") {
      return (0, import_sha256_uint8array.createHash)("sha256").update(input, "utf-8").digest();
    } else {
      return (0, import_sha256_uint8array.createHash)("sha256").update(input).digest();
    }
  }
  static generateKeypairBytes() {
    logger.debug("generateKeypairBytes");
    let keys = import_tweetnacl.default.sign.keyPair();
    return {
      pubkey: keys.publicKey,
      secret: keys.secretKey.slice(0, 32)
    };
  }
  static sign(keypairBytes, msg) {
    logger.debug("sign");
    let secret = concatBytes(keypairBytes.secret, keypairBytes.pubkey);
    if (typeof msg === "string") {
      msg = stringToBytes(msg);
    }
    return import_tweetnacl.default.sign.detached(msg, secret);
  }
  static verify(publicKey, sig, msg) {
    logger.debug("verify");
    try {
      if (typeof msg === "string") {
        msg = stringToBytes(msg);
      }
      return import_tweetnacl.default.sign.detached.verify(msg, sig, publicKey);
    } catch (e) {
      return false;
    }
  }
};

// src/util/misc.ts
var import_fast_deep_equal = __toModule(require("fast-deep-equal"));
var import_rfdc = __toModule(require("rfdc"));
var deepEqual = import_fast_deep_equal.default;
var deepCopy = (0, import_rfdc.default)();
var microsecondNow = () => Date.now() * 1e3;
var sleep = (ms) => new Promise((res, rej) => {
  setTimeout(res, ms);
});
var randomId = () => "" + Math.random() + Math.random();

// src/crypto/keypair.ts
var encodeAuthorKeypairToStrings = (shortname, pair) => ({
  address: assembleAuthorAddress(shortname, base32BytesToString(pair.pubkey)),
  secret: base32BytesToString(pair.secret)
});
var decodeAuthorKeypairToBytes = (pair) => {
  try {
    let authorParsed = parseAuthorAddress(pair.address);
    if (isErr(authorParsed)) {
      return authorParsed;
    }
    let bytes = {
      pubkey: base32StringToBytes(authorParsed.pubkey),
      secret: base32StringToBytes(pair.secret)
    };
    if (bytes.pubkey.length !== 32) {
      return new ValidationError(`pubkey bytes should be 32 bytes long, not ${bytes.pubkey.length} after base32 decoding.  ${pair.address}`);
    }
    if (bytes.secret.length !== 32) {
      return new ValidationError(`secret bytes should be 32 bytes long, not ${bytes.secret.length} after base32 decoding.  ${pair.secret}`);
    }
    return bytes;
  } catch (err) {
    return new ValidationError("crash while decoding author keypair: " + err.message);
  }
};

// src/crypto/global-crypto-driver.ts
var logger2 = new Logger("crypto", "cyanBright");
var GlobalCryptoDriver = CryptoDriverTweetnacl;
var setGlobalCryptoDriver = (driver) => {
  logger2.debug(`set global crypto driver: ${driver.name}`);
  GlobalCryptoDriver = driver;
};

// src/crypto/crypto.ts
var logger3 = new Logger("crypto", "cyanBright");
var Crypto = class {
  static sha256base32(input) {
    return base32BytesToString(GlobalCryptoDriver.sha256(input));
  }
  static generateAuthorKeypair(name) {
    logger3.debug(`generateAuthorKeypair("${name}")`);
    let keypairBytes = GlobalCryptoDriver.generateKeypairBytes();
    let keypairFormatted = {
      address: assembleAuthorAddress(name, base32BytesToString(keypairBytes.pubkey)),
      secret: base32BytesToString(keypairBytes.secret)
    };
    let err = checkAuthorIsValid(keypairFormatted.address);
    if (isErr(err)) {
      return err;
    }
    return keypairFormatted;
  }
  static sign(keypair, msg) {
    logger3.debug(`sign`);
    try {
      let keypairBytes = decodeAuthorKeypairToBytes(keypair);
      if (isErr(keypairBytes)) {
        return keypairBytes;
      }
      return base32BytesToString(GlobalCryptoDriver.sign(keypairBytes, msg));
    } catch (err) {
      return new ValidationError("unexpected error while signing: " + err.message);
    }
  }
  static verify(authorAddress, sig, msg) {
    logger3.debug(`verify`);
    try {
      let authorParsed = parseAuthorAddress(authorAddress);
      if (isErr(authorParsed)) {
        return false;
      }
      return GlobalCryptoDriver.verify(base32StringToBytes(authorParsed.pubkey), base32StringToBytes(sig), msg);
    } catch (err) {
      return false;
    }
  }
  static checkAuthorKeypairIsValid(keypair) {
    logger3.debug(`checkAuthorKeypairIsValid`);
    try {
      if (typeof keypair.address !== "string" || typeof keypair.secret !== "string") {
        return new ValidationError("address and secret must be strings");
      }
      let addressErr = checkAuthorIsValid(keypair.address);
      if (isErr(addressErr)) {
        return addressErr;
      }
      let msg = "a test message to sign. " + randomId();
      let sig = this.sign(keypair, msg);
      if (isErr(sig)) {
        return sig;
      }
      let isValid = this.verify(keypair.address, sig, msg);
      if (isValid === false) {
        return new ValidationError("pubkey does not match secret");
      }
      return true;
    } catch (err) {
      return new ValidationError("unexpected error in checkAuthorKeypairIsValid: " + err.message);
    }
  }
};

// src/format-validators/format-validator-es4.ts
var logger4 = new Logger("validator es.4", "red");
var FUTURE_CUTOFF_MINUTES = 10;
var FUTURE_CUTOFF_MICROSECONDS = FUTURE_CUTOFF_MINUTES * 60 * 1e3 * 1e3;
var MIN_TIMESTAMP = 1e13;
var MAX_TIMESTAMP = 9007199254740990;
var MAX_CONTENT_LENGTH = 4e6;
var HASH_STR_LEN = 53;
var SIG_STR_LEN = 104;
var ES4_CORE_SCHEMA = {
  objSchema: {
    format: checkLiteral("es.4"),
    author: checkString({allowedChars: authorAddressChars}),
    content: checkString({maxLen: MAX_CONTENT_LENGTH}),
    contentHash: checkString({allowedChars: b32chars, len: HASH_STR_LEN}),
    deleteAfter: checkInt({min: MIN_TIMESTAMP, max: MAX_TIMESTAMP, nullable: true}),
    path: checkString({allowedChars: pathChars, minLen: 2, maxLen: 512}),
    signature: checkString({allowedChars: b32chars, len: SIG_STR_LEN}),
    timestamp: checkInt({min: MIN_TIMESTAMP, max: MAX_TIMESTAMP}),
    workspace: checkString({allowedChars: workspaceAddressChars})
  },
  allowLiteralUndefined: false,
  allowExtraKeys: false
};
var _a;
var FormatValidatorEs4 = (_a = class {
  static hashDocument(doc) {
    let docWithFakeSig = __spreadProps(__spreadValues({}, doc), {
      signature: "bthisisafakesignatureusedtofillintheobjectwhenvalidatingitforhashingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    });
    let err = this._checkBasicDocumentValidity(docWithFakeSig);
    if (isErr(err)) {
      return err;
    }
    return Crypto.sha256base32(`author	${doc.author}
contentHash	${doc.contentHash}
` + (doc.deleteAfter === null ? "" : `deleteAfter	${doc.deleteAfter}
`) + `format	${doc.format}
path	${doc.path}
timestamp	${doc.timestamp}
workspace	${doc.workspace}
`);
  }
  static signDocument(keypair, doc) {
    if (keypair.address !== doc.author) {
      return new ValidationError("when signing a document, keypair address must match document author");
    }
    let hash = this.hashDocument(doc);
    if (isErr(hash)) {
      return hash;
    }
    let sig = Crypto.sign(keypair, hash);
    if (isErr(sig)) {
      return sig;
    }
    return __spreadProps(__spreadValues({}, doc), {signature: sig});
  }
  static removeExtraFields(doc) {
    if (!isPlainObject(doc)) {
      return new ValidationError("doc is not a plain javascript object");
    }
    let validKeys = new Set(Object.keys(ES4_CORE_SCHEMA.objSchema || {}));
    let doc2 = {};
    let extras = {};
    for (let [key, val] of Object.entries(doc)) {
      if (validKeys.has(key)) {
        doc2[key] = val;
      } else {
        if (!key.startsWith("_")) {
          return new ValidationError("extra document fields must have names starting with an underscore");
        }
        extras[key] = val;
      }
    }
    return {
      doc: doc2,
      extras
    };
  }
  static checkDocumentIsValid(doc, now) {
    if (now === void 0) {
      now = Date.now() * 1e3;
    }
    let errBV = this._checkBasicDocumentValidity(doc);
    if (isErr(errBV)) {
      return errBV;
    }
    let errT = this._checkTimestampIsOk(doc.timestamp, doc.deleteAfter, now);
    if (isErr(errT)) {
      return errT;
    }
    let errW = this._checkAuthorCanWriteToPath(doc.author, doc.path);
    if (isErr(errW)) {
      return errW;
    }
    let errP = this._checkPathIsValid(doc.path, doc.deleteAfter);
    if (isErr(errP)) {
      return errP;
    }
    let errAA = checkAuthorIsValid(doc.author);
    if (isErr(errAA)) {
      return errAA;
    }
    let errWA = checkWorkspaceIsValid(doc.workspace);
    if (isErr(errWA)) {
      return errWA;
    }
    let errS = this._checkAuthorSignatureIsValid(doc);
    if (isErr(errS)) {
      return errS;
    }
    let errCH = this._checkContentMatchesHash(doc.content, doc.contentHash);
    if (isErr(errCH)) {
      return errCH;
    }
    return true;
  }
  static _checkBasicDocumentValidity(doc) {
    let err = checkObj(ES4_CORE_SCHEMA)(doc);
    if (err !== null) {
      return new ValidationError(err);
    }
    return true;
  }
  static _checkAuthorCanWriteToPath(author, path) {
    if (path.indexOf("~") === -1) {
      return true;
    }
    if (path.indexOf("~" + author) !== -1) {
      return true;
    }
    return new ValidationError(`author ${author} can't write to path ${path}`);
  }
  static _checkTimestampIsOk(timestamp, deleteAfter, now) {
    if (timestamp > now + FUTURE_CUTOFF_MICROSECONDS) {
      return new ValidationError("timestamp too far in the future");
    }
    if (deleteAfter !== null) {
      if (now > deleteAfter) {
        return new ValidationError("ephemeral doc has expired");
      }
      if (deleteAfter <= timestamp) {
        return new ValidationError("ephemeral doc expired before it was created");
      }
    }
    return true;
  }
  static _checkPathIsValid(path, deleteAfter) {
    if (!path.startsWith("/")) {
      return new ValidationError("invalid path: must start with /");
    }
    if (path.endsWith("/")) {
      return new ValidationError("invalid path: must not end with /");
    }
    if (path.startsWith("/@")) {
      return new ValidationError('invalid path: must not start with "/@"');
    }
    if (path.indexOf("//") !== -1) {
      return new ValidationError("invalid path: must not contain two consecutive slashes");
    }
    if (deleteAfter !== void 0) {
      if (path.indexOf("!") === -1 && deleteAfter !== null) {
        return new ValidationError("when deleteAfter is set, path must contain '!'");
      }
      if (path.indexOf("!") !== -1 && deleteAfter === null) {
        return new ValidationError("when deleteAfter is null, path must not contain '!'");
      }
    }
    return true;
  }
  static _checkAuthorSignatureIsValid(doc) {
    try {
      let hash = this.hashDocument(doc);
      if (isErr(hash)) {
        return hash;
      }
      let verified = Crypto.verify(doc.author, doc.signature, hash);
      if (verified !== true) {
        return new ValidationError("signature is invalid");
      }
      return true;
    } catch (err) {
      return new ValidationError("signature is invalid (unexpected exception)");
    }
  }
  static _checkContentMatchesHash(content, contentHash) {
    if (Crypto.sha256base32(content) !== contentHash) {
      return new ValidationError("content does not match contentHash");
    }
    return true;
  }
}, _a.format = "es.4", _a);

// src/peer/peer-types.ts
var saltAndHashWorkspace = (salt, workspace) => Crypto.sha256base32(salt + workspace + salt);
var initialPeerClientState = {
  serverPeerId: null,
  commonWorkspaces: null,
  workspaceStates: {},
  lastSeenAt: null
};

// src/storage/util-types.ts
var Cmp;
(function(Cmp2) {
  Cmp2[Cmp2["LT"] = -1] = "LT";
  Cmp2[Cmp2["EQ"] = 0] = "EQ";
  Cmp2[Cmp2["GT"] = 1] = "GT";
})(Cmp || (Cmp = {}));

// src/storage/compare.ts
var sortedInPlace = (array) => {
  array.sort();
  return array;
};
var compareBasic = (a, b, order = "ASC") => {
  if (deepEqual(a, b)) {
    return Cmp.EQ;
  }
  if (order === "ASC" || order === void 0) {
    return a < b ? Cmp.LT : Cmp.GT;
  } else if (order === "DESC") {
    return a > b ? Cmp.LT : Cmp.GT;
  } else {
    throw new Error("unexpected sort order to compareBasic: " + JSON.stringify(order));
  }
};
var compareArrays = (a, b, sortOrders) => {
  var _a2, _b;
  let minLen = Math.min(a.length, b.length);
  for (let ii2 = 0; ii2 < minLen; ii2++) {
    let sortOrder2 = (_a2 = sortOrders == null ? void 0 : sortOrders[ii2]) != null ? _a2 : "ASC";
    let elemCmp = compareBasic(a[ii2], b[ii2], sortOrder2);
    if (elemCmp !== Cmp.EQ) {
      return elemCmp;
    }
  }
  if (a.length === b.length) {
    return Cmp.EQ;
  }
  let ii = Math.min(a.length, b.length);
  let sortOrder = (_b = sortOrders == null ? void 0 : sortOrders[ii]) != null ? _b : "ASC";
  return compareBasic(a.length, b.length, sortOrder);
};
var compareByObjKey = (key, sortOrder = "ASC") => (a, b) => compareBasic(a[key], b[key], sortOrder);
var compareByFn = (fn) => (a, b) => compareBasic(fn(a), fn(b));
var compareByObjArrayFn = (fn) => (a, b) => compareArrays(fn(a), fn(b));

// src/peer/peer-client.ts
var logger5 = new Logger("peer client", "greenBright");
var loggerDo = new Logger("peer client: do", "green");
var loggerHandle = new Logger("peer client: handle", "cyan");
var loggerProcess = new Logger("peer client: process", "cyan");
var J = JSON.stringify;
var PeerClient = class {
  constructor(peer, server) {
    this.state = __spreadValues({}, initialPeerClientState);
    logger5.debug("peerClient constructor");
    this.peer = peer;
    this.server = server;
    logger5.debug(`...peerId: ${this.peer.peerId}`);
    logger5.debug(`...client initial state:`);
    logger5.debug(this.state);
  }
  async setState(newState) {
    if (newState.serverPeerId !== null && newState.serverPeerId !== void 0) {
      if (this.state.serverPeerId !== null) {
        if (newState.serverPeerId !== this.state.serverPeerId) {
          logger5.warn(`server has changed peer ID from ${this.state.serverPeerId} to ${newState.serverPeerId}; resetting PeerClient state`);
          this.state = __spreadValues({}, initialPeerClientState);
        }
      }
    }
    this.state = __spreadValues(__spreadValues({}, this.state), newState);
  }
  async do_getServerPeerId() {
    let serverPeerId = await this.server.serve_peerId();
    await this.setState({
      serverPeerId,
      lastSeenAt: microsecondNow()
    });
    return serverPeerId;
  }
  async do_saltyHandshake() {
    loggerDo.debug("do_saltyHandshake...");
    loggerDo.debug("...initial client state:");
    loggerDo.debug(this.state);
    let request = {};
    loggerDo.debug("...request:");
    loggerDo.debug(request);
    loggerDo.debug("...asking server to serve_ ...");
    let response = await this.server.serve_saltyHandshake(request);
    loggerDo.debug("...response:");
    loggerDo.debug(response);
    loggerDo.debug("...client is going to handle_ ...");
    let stateUpdate = await this.handle_saltyHandshake(response);
    loggerDo.debug("...state update:");
    loggerDo.debug(stateUpdate);
    loggerDo.debug("...setting state...");
    await this.setState(stateUpdate);
    loggerDo.debug("...new combined state:");
    loggerDo.debug(this.state);
    loggerDo.debug("...do_saltyHandshake is done");
  }
  async handle_saltyHandshake(response) {
    loggerHandle.debug("handle_saltyHandshake...");
    let {serverPeerId, salt, saltedWorkspaces} = response;
    loggerHandle.debug("...salting and hashing my own workspaces and comparing with server...");
    let serverSaltedSet = new Set(saltedWorkspaces);
    let commonWorkspaceSet = new Set();
    for (let plainWs of this.peer.workspaces()) {
      let saltedWs = saltAndHashWorkspace(salt, plainWs);
      if (serverSaltedSet.has(saltedWs)) {
        commonWorkspaceSet.add(plainWs);
      }
    }
    let commonWorkspaces = sortedInPlace([...commonWorkspaceSet]);
    loggerHandle.debug(`...server has ${saltedWorkspaces.length} workspaces; we have ${this.peer.workspaces().length}; and ${commonWorkspaces.length} are in common`);
    loggerHandle.debug(`...handle_saltyHandshake is done.`);
    return {
      serverPeerId,
      commonWorkspaces,
      lastSeenAt: microsecondNow()
    };
  }
  async do_allWorkspaceStates() {
    loggerDo.debug("do_allWorkspaceStates...");
    loggerDo.debug("...initial client state:");
    loggerDo.debug(this.state);
    if (this.state.commonWorkspaces === null || this.state.commonWorkspaces.length === 0) {
      loggerDo.debug("...actually there are no common workspaces to ask about, so quitting early");
      return;
    }
    let request = {
      commonWorkspaces: this.state.commonWorkspaces || []
    };
    loggerDo.debug("...request:");
    loggerDo.debug(request);
    loggerDo.debug("...asking server to serve_ ...");
    let response = await this.server.serve_allWorkspaceStates(request);
    loggerDo.debug("...response:");
    loggerDo.debug(response);
    loggerDo.debug("...client is going to handle_ ...");
    let stateUpdate = await this.handle_allWorkspaceStates(request, response);
    loggerDo.debug("...state update:");
    loggerDo.debug(stateUpdate);
    loggerDo.debug("...setting state...");
    await this.setState(stateUpdate);
    loggerDo.debug("...new combined state:");
    loggerDo.debug(this.state);
    loggerDo.debug("...do_allWorkspaceStates is done");
  }
  async handle_allWorkspaceStates(request, response) {
    var _a2, _b;
    loggerHandle.debug("handle_allWorkspaceStates...");
    let {commonWorkspaces} = request;
    let {serverPeerId, workspaceStatesFromServer} = response;
    let newWorkspaceStates = {};
    for (let workspace of Object.keys(workspaceStatesFromServer)) {
      loggerHandle.debug(`  > ${workspace}`);
      let workspaceStateFromServer = workspaceStatesFromServer[workspace];
      if (workspaceStateFromServer.workspace !== workspace) {
        throw new ValidationError(`server shenanigans: server response is not self-consistent, workspace key does not match data in the Record ${workspaceStateFromServer.workspace} & ${workspace}`);
      }
      if (commonWorkspaces.indexOf(workspace) === -1) {
        throw new ValidationError(`server shenanigans: server included a workspace that is not common: ${workspace}`);
      }
      let clientStorage = this.peer.getStorage(workspace);
      if (clientStorage === void 0) {
        throw new ValidationError(`server shenanigans: referenced a workspace we don't have: ${workspace}`);
      }
      let existingWorkspaceState = this.state.workspaceStates[workspace] || {};
      newWorkspaceStates[workspace] = {
        workspace,
        serverStorageId: workspaceStateFromServer.serverStorageId,
        serverMaxLocalIndexOverall: workspaceStateFromServer.serverMaxLocalIndexOverall,
        serverMaxLocalIndexSoFar: (_a2 = existingWorkspaceState.serverMaxLocalIndexSoFar) != null ? _a2 : -1,
        clientStorageId: clientStorage.storageId,
        clientMaxLocalIndexOverall: clientStorage.getMaxLocalIndex(),
        clientMaxLocalIndexSoFar: (_b = existingWorkspaceState.clientMaxLocalIndexSoFar) != null ? _b : -1,
        lastSeenAt: microsecondNow()
      };
    }
    loggerHandle.debug("...handle_allWorkspaceStates is done");
    return {
      serverPeerId,
      workspaceStates: newWorkspaceStates,
      lastSeenAt: microsecondNow()
    };
  }
  async do_workspaceQuery(request) {
    loggerDo.debug("do_workspaceQuery...");
    loggerDo.debug("...initial client state:");
    loggerDo.debug(this.state);
    loggerDo.debug("...request:");
    loggerDo.debug(request);
    loggerDo.debug("...asking server to serve_ ...");
    let response = await this.server.serve_workspaceQuery(request);
    loggerDo.debug("...response:");
    loggerDo.debug(response);
    loggerDo.debug("...client is going to process_ ...");
    let numPulled = await this.process_workspaceQuery(response);
    loggerDo.debug(`...pulled ${numPulled} docs`);
    loggerDo.debug("...final client state:");
    loggerDo.debug(this.state);
    loggerDo.debug("...do_workspaceQuery is done");
    return numPulled;
  }
  async process_workspaceQuery(response) {
    var _a2;
    loggerProcess.debug("process_workspaceQuery");
    let {
      workspace,
      storageId,
      serverMaxLocalIndexOverall,
      docs
    } = response;
    let storage = this.peer.getStorage(workspace);
    if (storage === void 0) {
      let err = `workspace ${workspace} is unknown; skipping`;
      loggerProcess.error(err);
      throw err;
    }
    let myWorkspaceState = this.state.workspaceStates[workspace];
    if (storageId !== myWorkspaceState.serverStorageId) {
      let err = `storageId for ${workspace} is not ${storageId} anymore, it's ${myWorkspaceState.serverStorageId}`;
      loggerProcess.error(err);
      throw err;
    }
    let numPulled = 0;
    for (let doc of docs) {
      loggerProcess.debug("trying to ingest a doc", doc);
      let myWorkspaceState2 = this.state.workspaceStates[workspace];
      let ingestEvent = await storage.ingest(doc);
      if (ingestEvent.kind === "failure") {
        loggerProcess.error("doc was not written.");
        loggerProcess.error("...reason", ingestEvent.reason);
        loggerProcess.error("...err", ingestEvent.err);
        loggerProcess.error("...doc", doc);
        loggerProcess.error("if it is invalid, it might be from the future;");
        loggerProcess.error("we will need to try again later.");
        break;
      }
      numPulled += 1;
      myWorkspaceState2 = __spreadProps(__spreadValues({}, myWorkspaceState2), {
        serverMaxLocalIndexOverall,
        serverMaxLocalIndexSoFar: (_a2 = doc._localIndex) != null ? _a2 : -1,
        lastSeenAt: microsecondNow()
      });
      await this.setState({
        workspaceStates: __spreadProps(__spreadValues({}, this.state.workspaceStates), {
          [workspace]: myWorkspaceState2
        }),
        lastSeenAt: microsecondNow()
      });
    }
    loggerProcess.debug(`...done ingesting ${numPulled} docs`);
    loggerProcess.debug("...process_workspaceQuery is done.");
    return numPulled;
  }
};

// src/peer/peer-server.ts
var logger6 = new Logger("peer server", "magentaBright");
var loggerServe = new Logger("peer server: serve", "magenta");
var J2 = JSON.stringify;
var PeerServer = class {
  constructor(peer) {
    logger6.debug("peerServer constructor");
    this.peer = peer;
    logger6.debug(`...peerId: ${this.peer.peerId}`);
  }
  async serve_peerId() {
    loggerServe.debug("serve_peerId...");
    loggerServe.debug(`... ${this.peer.peerId}`);
    return this.peer.peerId;
  }
  async serve_saltyHandshake(request) {
    loggerServe.debug("serve_saltyHandshake...");
    let salt = randomId();
    let saltedWorkspaces = this.peer.workspaces().map((ws) => saltAndHashWorkspace(salt, ws));
    loggerServe.debug(`...serve_saltyHandshake is done.  found ${saltedWorkspaces.length} workspaces.`);
    return {
      serverPeerId: this.peer.peerId,
      salt,
      saltedWorkspaces
    };
  }
  async serve_allWorkspaceStates(request) {
    loggerServe.debug("serve_allWorkspaceStates...");
    let workspaceStatesFromServer = {};
    for (let workspace of request.commonWorkspaces) {
      let storage = this.peer.getStorage(workspace);
      if (storage === void 0) {
        loggerServe.debug(`workspace ${workspace} is unknown??; skipping`);
        continue;
      }
      let workspaceStateFromServer = {
        workspace,
        serverStorageId: storage.storageId,
        serverMaxLocalIndexOverall: storage.getMaxLocalIndex()
      };
      workspaceStatesFromServer[workspace] = workspaceStateFromServer;
    }
    loggerServe.debug("...serve_allWorkspaceStates is done.");
    return {
      serverPeerId: this.peer.peerId,
      workspaceStatesFromServer
    };
  }
  async serve_workspaceQuery(request) {
    let {workspace, storageId, query} = request;
    loggerServe.debug("serve_workspaceQuery...");
    let storage = this.peer.getStorage(workspace);
    if (storage === void 0) {
      let err = `workspace ${workspace} is unknown; skipping`;
      loggerServe.debug(err);
      throw err;
    }
    if (storage.storageId !== storageId) {
      let err = `storageId for ${workspace} is not ${storageId} anymore, it's ${storage.storageId}`;
      loggerServe.debug(err);
      throw err;
    }
    loggerServe.debug("...querying storage for docs");
    let docs = await storage.queryDocs(query);
    loggerServe.debug(`...got ${docs.length} docs`);
    loggerServe.debug("...serve_workspaceQuery is done");
    return {
      workspace,
      storageId,
      serverMaxLocalIndexOverall: storage.getMaxLocalIndex(),
      docs
    };
  }
};

// src/peer/peer.ts
var import_superbus_map = __toModule(require("superbus-map"));
var logger7 = new Logger("peer", "blueBright");
var J3 = JSON.stringify;
var Peer = class {
  constructor() {
    logger7.debug("constructor");
    this.storageMap = new import_superbus_map.SuperbusMap();
    this.peerId = "peer:" + randomId();
  }
  hasWorkspace(workspace) {
    return this.storageMap.has(workspace);
  }
  workspaces() {
    let keys = [...this.storageMap.keys()];
    keys.sort();
    return keys;
  }
  storages() {
    let keys = [...this.storageMap.keys()];
    keys.sort();
    return keys.map((key) => this.storageMap.get(key));
  }
  size() {
    return this.storageMap.size;
  }
  getStorage(ws) {
    return this.storageMap.get(ws);
  }
  async addStorage(storage) {
    logger7.debug(`addStorage(${J3(storage.workspace)})`);
    if (this.storageMap.has(storage.workspace)) {
      logger7.debug(`already had a storage with that workspace`);
      throw new Error(`Peer.addStorage: already has a storage with workspace ${J3(storage.workspace)}.  Don't add another one.`);
    }
    await this.storageMap.set(storage.workspace, storage);
    logger7.debug(`    ...addStorage: done`);
  }
  async removeStorageByWorkspace(workspace) {
    logger7.debug(`removeStorageByWorkspace(${J3(workspace)})`);
    await this.storageMap.delete(workspace);
  }
  async removeStorage(storage) {
    let existingStorage = this.storageMap.get(storage.workspace);
    if (storage === existingStorage) {
      logger7.debug(`removeStorage(${J3(storage.workspace)})`);
      await this.removeStorageByWorkspace(storage.workspace);
    } else {
      logger7.debug(`removeStorage(${J3(storage.workspace)}) -- same workspace but it's a different instance now; ignoring`);
    }
  }
};

// src/query/query-types.ts
var DEFAULT_QUERY = {
  historyMode: "latest",
  orderBy: "path ASC",
  startAfter: void 0,
  limit: void 0,
  filter: void 0
};

// src/query/query.ts
var logger8 = new Logger("query", "greenBright");
var cleanUpQuery = (inputQuery) => {
  var _a2, _b, _c, _d;
  let query = __spreadValues(__spreadValues({}, DEFAULT_QUERY), inputQuery);
  let invalidResponse = {
    query: {limit: 0},
    isValid: false,
    willMatch: "nothing"
  };
  if (query.limit !== void 0 && query.limit < 0) {
    logger8.debug("cleanUpQuery: unreasonable limit - returning empty invalid query", invalidResponse);
    return invalidResponse;
  }
  if (((_a2 = query.orderBy) == null ? void 0 : _a2.startsWith("path")) && ((_b = query.startAfter) == null ? void 0 : _b.localIndex) !== void 0) {
    logger8.debug('cleanUpQuery: orderBy is "path" but startAfter is not compatible - returning empty invalid query', invalidResponse);
    return invalidResponse;
  }
  if (((_c = query.orderBy) == null ? void 0 : _c.startsWith("localIndex")) && ((_d = query.startAfter) == null ? void 0 : _d.path) !== void 0) {
    logger8.debug('cleanUpQuery: orderBy is "localIndex" but startAfter is not compatible - returning empty invalid query', invalidResponse);
    return invalidResponse;
  }
  ;
  if (query.historyMode !== void 0 && query.historyMode !== "all" && query.historyMode !== "latest") {
    logger8.debug(`cleanUpQuery: unknown historyMode ${JSON.stringify(query.historyMode)} - returning empty invalid query`, invalidResponse);
    return invalidResponse;
  }
  if (query.orderBy !== void 0) {
    if (["path ASC", "path DESC", "localIndex ASC", "localIndex DESC"].indexOf(query.orderBy) === -1) {
      logger8.debug(`cleanUpQuery: unrecognized orderBy value ${JSON.stringify(query.orderBy)} - returning empty invalid query`, invalidResponse);
      return invalidResponse;
    }
  }
  let willMatch = query.historyMode === "all" ? "all" : "all-latest";
  if (query.filter !== void 0 && !deepEqual(query.filter, {})) {
    willMatch = "some";
  }
  if (query.startAfter !== void 0 && !deepEqual(query.startAfter, {})) {
    willMatch = "some";
  }
  if (query.limit !== void 0) {
    if (query.limit > 0) {
      willMatch = "some";
    }
    if (query.limit === 0) {
      willMatch = "nothing";
    }
  }
  if (query.filter !== void 0) {
    let filter = query.filter;
    if (filter.path && filter.pathStartsWith && !filter.path.startsWith(filter.pathStartsWith)) {
      willMatch = "nothing";
    }
    if (filter.path && filter.pathEndsWith && !filter.path.endsWith(filter.pathEndsWith)) {
      willMatch = "nothing";
    }
    if (filter.timestamp && filter.timestampGt && !(filter.timestamp > filter.timestampGt)) {
      willMatch = "nothing";
    }
    if (filter.timestamp && filter.timestampLt && !(filter.timestamp < filter.timestampLt)) {
      willMatch = "nothing";
    }
    if (filter.timestampGt && filter.timestampLt && !(filter.timestampLt + 1 < filter.timestampGt)) {
      willMatch = "nothing";
    }
    if (filter.contentLength && filter.contentLengthGt && !(filter.contentLength > filter.contentLengthGt)) {
      willMatch = "nothing";
    }
    if (filter.contentLength && filter.contentLengthLt && !(filter.contentLength < filter.contentLengthLt)) {
      willMatch = "nothing";
    }
    if (filter.contentLengthGt && filter.contentLengthLt && !(filter.contentLengthLt + 1 < filter.contentLengthGt)) {
      willMatch = "nothing";
    }
  }
  if (willMatch === "nothing") {
    let nopQuery = {
      query: {limit: 0},
      isValid: true,
      willMatch: "nothing"
    };
    logger8.debug(`cleanUpQuery - this query will match nothing, so returning a simpler query that also matches nothing`, nopQuery);
    return nopQuery;
  }
  logger8.debug(`cleanUpQuery - query is ok!  willMatch = ${willMatch}`);
  return {
    query,
    isValid: true,
    willMatch
  };
};
var docMatchesFilter = (doc, filter) => {
  if (filter.path !== void 0 && doc.path !== filter.path) {
    return false;
  }
  if (filter.pathStartsWith !== void 0 && !doc.path.startsWith(filter.pathStartsWith)) {
    return false;
  }
  if (filter.pathEndsWith !== void 0 && !doc.path.startsWith(filter.pathEndsWith)) {
    return false;
  }
  if (filter.author !== void 0 && doc.author !== filter.author) {
    return false;
  }
  if (filter.timestamp !== void 0 && doc.timestamp !== filter.timestamp) {
    return false;
  }
  if (filter.timestampGt !== void 0 && !(doc.timestamp > filter.timestampGt)) {
    return false;
  }
  if (filter.timestampLt !== void 0 && !(doc.timestamp > filter.timestampLt)) {
    return false;
  }
  let contentLength = stringLengthInBytes(doc.content);
  if (filter.contentLength !== void 0 && contentLength !== filter.contentLength) {
    return false;
  }
  if (filter.contentLengthGt !== void 0 && !(contentLength > filter.contentLengthGt)) {
    return false;
  }
  if (filter.contentLengthLt !== void 0 && !(contentLength > filter.contentLengthLt)) {
    return false;
  }
  return true;
};

// src/query-follower/query-follower.ts
var import_superbus = __toModule(require("superbus"));
var logger9 = new Logger("QueryFollower", "redBright");
var loggerSub = new Logger("QueryFollowerSub", "red");
var J4 = JSON.stringify;
var QueryFollower = class {
  constructor(storage, query) {
    this._state = "new";
    this._unsub = null;
    logger9.debug("constructor");
    this.storage = storage;
    this.query = deepCopy(query);
    this.bus = new import_superbus.Simplebus();
    logger9.debug("...enforcing rules on supported queries");
    if (query.historyMode !== "all") {
      throw new NotImplementedError(`QueryFollower historyMode must be 'all'`);
    }
    if (query.orderBy !== "localIndex ASC") {
      throw new NotImplementedError(`QueryFollower orderBy must be 'localIndex ASC'`);
    }
    if (query.limit !== void 0) {
      throw new NotImplementedError(`QueryFollower must not have a limit`);
    }
  }
  _expectState(states) {
    if (states.indexOf(this._state) === -1) {
      throw new Error(`QueryFollower expected state to be one of ${J4(states)} but instead found ${this._state}`);
    }
  }
  state() {
    logger9.debug("state() => " + this._state);
    return this._state;
  }
  async hatch() {
    logger9.debug("hatch...");
    this._expectState(["new"]);
    logger9.debug("...hatch: calling _catchUp");
    await this._catchUp();
    this._expectState(["closed", "error", "live"]);
    logger9.debug("...hatch: done calling _catchUp");
    logger9.debug(`...hatch: state is "${this._state}"`);
    logger9.debug(`...hatch is done`);
  }
  async _catchUp() {
    var _a2;
    logger9.debug("_catchUp...");
    this._expectState(["new"]);
    let storage = this.storage;
    let driver = this.storage.storageDriver;
    let query = this.query;
    if (query.startAfter === void 0) {
      logger9.debug(`..._catchUp was not needed becaue startAfter is undefined, so we're going right to live mode.`);
      this._state = "live";
      let idleEvent = {kind: "idle"};
      await this.bus.send(idleEvent);
      this._subscribe();
      return;
    }
    this._state = "catching-up";
    logger9.debug(`QueryFollower has a startAfter already; catching up.`);
    while (true) {
      let asOf1 = -100;
      let asOf2 = -100;
      let asOf3 = -100;
      let maxReturned = -100;
      try {
        asOf1 = driver.getMaxLocalIndex();
        logger9.debug(`...at ${asOf1}, started querying for existing docs`);
        let existingDocs = await storage.queryDocs(query);
        for (let doc of existingDocs) {
          maxReturned = Math.max(maxReturned, (_a2 = doc._localIndex) != null ? _a2 : -1);
        }
        asOf2 = driver.getMaxLocalIndex();
        logger9.debug(`...at ${asOf2}, got ${existingDocs.length} existing docs`);
        logger9.debug(`...sending docs to bus...`);
        for (let doc of existingDocs) {
          let event = {
            kind: "existing",
            maxLocalIndex: asOf2,
            doc
          };
          await this.bus.send(event);
        }
        asOf3 = driver.getMaxLocalIndex();
        logger9.debug(`...at ${asOf3}, finished running ${existingDocs.length} callbacks for existing docs`);
      } catch (err) {
        if (err instanceof StorageIsClosedError) {
          logger9.debug(`storage was closed while we were catching up, oh well.`);
          this.close();
        } else {
          this._state = "error";
          throw err;
        }
      }
      let asOfSummary = `( asOf: ${asOf1} [query] ${asOf2} [callbacks] ${asOf3}.  maxReturned: ${maxReturned} )`;
      logger9.debug(`...query and callback summary: ${asOfSummary}`);
      if (asOf1 === asOf3) {
        logger9.debug(`...asOf stayed at ${asOf1} so nothing new has happened since we did the query, so we can stop catching up now.`);
        logger9.debug(`...setting startAfter to localIndex: ${asOf1}`);
        query.startAfter = {localIndex: asOf1};
        this._state = "live";
        let idleEvent = {kind: "idle"};
        await this.bus.send(idleEvent);
        this._subscribe();
        break;
      } else {
        logger9.debug(`...asOf went from ${asOf1} to ${asOf3} so changes happened since we did our query; gotta query again to get those changes.`);
        logger9.debug(`...setting startAfter to localIndex: ${maxReturned} which is the max returned doc we saw.`);
        query.startAfter = {localIndex: maxReturned};
        await sleep(10);
      }
    }
    logger9.debug(`..._catchUp is done, we should now be live: '${this.state()}'`);
    this._expectState(["live"]);
  }
  _subscribe() {
    logger9.debug("_subscribe...");
    this._expectState(["live"]);
    let driver = this.storage.storageDriver;
    let query = this.query;
    let queryFilter = query.filter || {};
    let queryStartAfter = driver.getMaxLocalIndex();
    if (query.startAfter !== void 0 && query.startAfter.localIndex !== void 0) {
      queryStartAfter = query.startAfter.localIndex;
    }
    logger9.debug(`QueryFollower is switching to subscription mode:`);
    logger9.debug(`...queryFilter: ${J4(queryFilter)}`);
    logger9.debug(`...start paying attention after local index ${queryStartAfter}.  subscribing...`);
    this._unsub = this.storage.bus.on("*", async (channel, data) => {
      var _a2;
      this._expectState(["live"]);
      loggerSub.debug(`--- QueryFollower subscription: got an event on channel ${channel}`);
      let event = data;
      if (channel === "willClose") {
        let event2 = {
          kind: "willClose",
          maxLocalIndex: driver.getMaxLocalIndex()
        };
        await this.bus.send(event2);
      } else if (channel === "didClose") {
        let event2 = {
          kind: "didClose"
        };
        loggerSub.debug("storage did close.  sending that event...");
        await this.bus.send(event2);
        loggerSub.debug("storage did close.  ...and closing the queryFollower...");
        await this.close();
        loggerSub.debug("storage did close.  ...done.");
      } else if (data === void 0 || data.kind === void 0) {
        loggerSub.error("weird event on channel ", channel);
        return;
      } else if (event.kind === "success") {
        loggerSub.debug(`--- it's a write success.  do we care?`);
        let doc_li = (_a2 = event.doc._localIndex) != null ? _a2 : -1;
        let query_sa = queryStartAfter;
        if (doc_li <= query_sa) {
          loggerSub.debug(`--- don't care; localIndex is old (doc.localIndex ${doc_li} <= queryStartAfter ${query_sa})`);
        } else {
          if (!docMatchesFilter(event.doc, queryFilter)) {
            loggerSub.debug(`--- don't care; filter doesn't match`);
          } else {
            loggerSub.debug(`--- we care! filter matches (if there is one) and doc.localIndex comes after query.startAt.`);
            loggerSub.debug(`--- running callback blockingly...`);
            await this.bus.send(event);
            loggerSub.debug(`--- ...done running callback`);
          }
        }
      } else if (event.kind === "failure") {
        loggerSub.debug(`--- ingest failure event`);
        await this.bus.send(event);
      } else if (event.kind === "nothing_happened") {
        loggerSub.debug(`--- nothing happened event`);
        await this.bus.send(event);
      } else {
        loggerSub.debug(`--- WARNING: unknown event type event`);
        console.warn("this should never happen:", event);
        console.warn("this should never happen: unrecognised kind of LiveQueryEvent: " + event.kind);
      }
    });
  }
  async close() {
    if (this._state === "closed") {
      return;
    }
    logger9.debug("close...");
    this._state = "closed";
    if (this._unsub) {
      this._unsub;
    }
    let event = {kind: "queryFollowerDidClose"};
    await this.bus.send(event);
    logger9.debug("...close is done.");
  }
};

// src/storage/storage-async.ts
var import_superbus2 = __toModule(require("superbus"));
var import_concurrency_friends = __toModule(require("concurrency-friends"));
var J5 = JSON.stringify;
var logger10 = new Logger("storage async", "yellowBright");
var loggerSet = new Logger("storage async set", "yellowBright");
var loggerIngest = new Logger("storage async ingest", "yellowBright");
var loggerLiveQuery = new Logger("storage live query", "magentaBright");
var loggerLiveQuerySubscription = new Logger("storage live query subscription", "magenta");
var docCompareNewestFirst = (a, b) => {
  return compareArrays([a.timestamp, a.signature], [b.timestamp, a.signature], ["DESC", "ASC"]);
};
var StorageAsync = class {
  constructor(workspace, validator, driver) {
    this._isClosed = false;
    var _a2;
    logger10.debug(`constructor.  driver = ${(_a2 = driver == null ? void 0 : driver.constructor) == null ? void 0 : _a2.name}`);
    this.storageId = "storage-" + randomId();
    this.workspace = workspace;
    this.formatValidator = validator;
    this.storageDriver = driver;
    this.bus = new import_superbus2.Superbus("|");
    this._ingestLock = new import_concurrency_friends.Lock();
  }
  isClosed() {
    return this._isClosed;
  }
  async close(erase) {
    logger10.debug("closing...");
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    logger10.debug("    sending willClose blockingly...");
    await this.bus.sendAndWait("willClose");
    logger10.debug("    marking self as closed...");
    this._isClosed = true;
    logger10.debug(`    closing storageDriver (erase = ${erase})...`);
    await this.storageDriver.close(erase);
    logger10.debug("    sending didClose nonblockingly...");
    this.bus.sendLater("didClose");
    logger10.debug("...closing done");
  }
  async getConfig(key) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return await this.storageDriver.getConfig(key);
  }
  async setConfig(key, value) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return await this.storageDriver.setConfig(key, value);
  }
  async listConfigKeys() {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return await this.storageDriver.listConfigKeys();
  }
  async deleteConfig(key) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return await this.storageDriver.deleteConfig(key);
  }
  getMaxLocalIndex() {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return this.storageDriver.getMaxLocalIndex();
  }
  async getDocsAfterLocalIndex(historyMode, startAfter, limit) {
    logger10.debug(`getDocsAfterLocalIndex(${historyMode}, ${startAfter}, ${limit})`);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let query = {
      historyMode,
      orderBy: "localIndex ASC",
      startAfter: {
        localIndex: startAfter
      },
      limit
    };
    return await this.storageDriver.queryDocs(query);
  }
  async getAllDocs() {
    logger10.debug(`getAllDocs()`);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return await this.storageDriver.queryDocs({
      historyMode: "all",
      orderBy: "path ASC"
    });
  }
  async getLatestDocs() {
    logger10.debug(`getLatestDocs()`);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return await this.storageDriver.queryDocs({
      historyMode: "latest",
      orderBy: "path ASC"
    });
  }
  async getAllDocsAtPath(path) {
    logger10.debug(`getAllDocsAtPath("${path}")`);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return await this.storageDriver.queryDocs({
      historyMode: "all",
      orderBy: "path ASC",
      filter: {path}
    });
  }
  async getLatestDocAtPath(path) {
    logger10.debug(`getLatestDocsAtPath("${path}")`);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let docs = await this.storageDriver.queryDocs({
      historyMode: "latest",
      orderBy: "path ASC",
      filter: {path}
    });
    if (docs.length === 0) {
      return void 0;
    }
    return docs[0];
  }
  async queryDocs(query = {}) {
    logger10.debug(`queryDocs`, query);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return await this.storageDriver.queryDocs(query);
  }
  async set(keypair, docToSet) {
    var _a2;
    loggerSet.debug(`set`, docToSet);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    loggerSet.debug("...deciding timestamp: getting latest doc at the same path (from any author)");
    let timestamp;
    if (typeof docToSet.timestamp === "number") {
      timestamp = docToSet.timestamp;
      loggerSet.debug("...docToSet already has a timestamp; not changing it from ", timestamp);
    } else {
      let latestDocSamePath = await this.getLatestDocAtPath(docToSet.path);
      if (latestDocSamePath === void 0) {
        timestamp = microsecondNow();
        loggerSet.debug("...no existing latest doc, setting timestamp to now() =", timestamp);
      } else {
        timestamp = Math.max(microsecondNow(), latestDocSamePath.timestamp + 1);
        loggerSet.debug("...existing latest doc found, bumping timestamp to win if needed =", timestamp);
      }
    }
    let doc = {
      format: "es.4",
      author: keypair.address,
      content: docToSet.content,
      contentHash: Crypto.sha256base32(docToSet.content),
      deleteAfter: (_a2 = docToSet.deleteAfter) != null ? _a2 : null,
      path: docToSet.path,
      timestamp,
      workspace: this.workspace,
      signature: "?"
    };
    loggerSet.debug("...signing doc");
    let signedDoc = this.formatValidator.signDocument(keypair, doc);
    if (isErr(signedDoc)) {
      return {
        kind: "failure",
        reason: "invalid_document",
        err: signedDoc,
        maxLocalIndex: this.storageDriver.getMaxLocalIndex()
      };
    }
    loggerSet.debug("...signature =", signedDoc.signature);
    loggerSet.debug("...ingesting");
    loggerSet.debug("-----------------------");
    let ingestEvent = await this.ingest(signedDoc);
    loggerSet.debug("-----------------------");
    loggerSet.debug("...done ingesting");
    loggerSet.debug("...set is done.");
    return ingestEvent;
  }
  async ingest(docToIngest) {
    loggerIngest.debug(`ingest`, docToIngest);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    loggerIngest.debug("...removing extra fields");
    let removeResultsOrErr = this.formatValidator.removeExtraFields(docToIngest);
    if (isErr(removeResultsOrErr)) {
      return {
        kind: "failure",
        reason: "invalid_document",
        err: removeResultsOrErr,
        maxLocalIndex: this.storageDriver.getMaxLocalIndex()
      };
    }
    docToIngest = removeResultsOrErr.doc;
    let extraFields = removeResultsOrErr.extras;
    if (Object.keys(extraFields).length > 0) {
      loggerIngest.debug(`...extra fields found: ${J5(extraFields)}`);
    }
    let docIsValid = this.formatValidator.checkDocumentIsValid(docToIngest);
    if (isErr(docIsValid)) {
      return {
        kind: "failure",
        reason: "invalid_document",
        err: docIsValid,
        maxLocalIndex: this.storageDriver.getMaxLocalIndex()
      };
    }
    let writeToDriverWithLock = async () => {
      var _a2, _b;
      loggerIngest.debug(" >> ingest: start of protected region");
      loggerIngest.debug("  > getting other history docs at the same path by any author");
      let existingDocsSamePath = await this.getAllDocsAtPath(docToIngest.path);
      loggerIngest.debug(`  > ...got ${existingDocsSamePath.length}`);
      loggerIngest.debug("  > getting prevLatest and prevSameAuthor");
      let prevLatest = (_a2 = existingDocsSamePath[0]) != null ? _a2 : null;
      let prevSameAuthor = (_b = existingDocsSamePath.filter((d) => d.author === docToIngest.author)[0]) != null ? _b : null;
      loggerIngest.debug("  > checking if new doc is latest at this path");
      existingDocsSamePath.push(docToIngest);
      existingDocsSamePath.sort(docCompareNewestFirst);
      let isLatest = existingDocsSamePath[0] === docToIngest;
      loggerIngest.debug(`  > ...isLatest: ${isLatest}`);
      if (!isLatest && prevSameAuthor !== null) {
        loggerIngest.debug("  > new doc is not latest and there is another one from the same author...");
        let docComp = docCompareNewestFirst(docToIngest, prevSameAuthor);
        if (docComp === Cmp.GT) {
          loggerIngest.debug("  > new doc is GT prevSameAuthor, so it is obsolete");
          return {
            kind: "nothing_happened",
            reason: "obsolete_from_same_author",
            doc: docToIngest,
            maxLocalIndex: this.storageDriver.getMaxLocalIndex()
          };
        }
        if (docComp === Cmp.EQ) {
          loggerIngest.debug("  > new doc is EQ prevSameAuthor, so it is redundant (already_had_it)");
          return {
            kind: "nothing_happened",
            reason: "already_had_it",
            doc: docToIngest,
            maxLocalIndex: this.storageDriver.getMaxLocalIndex()
          };
        }
      }
      loggerIngest.debug("  > upserting into storageDriver...");
      let docAsWritten = await this.storageDriver.upsert(docToIngest);
      loggerIngest.debug("  > ...done upserting into storageDriver");
      loggerIngest.debug("  > ...getting storageDriver maxLocalIndex...");
      let maxLocalIndex = this.storageDriver.getMaxLocalIndex();
      loggerIngest.debug(" >> ingest: end of protected region, returning a WriteEvent from the lock");
      return {
        kind: "success",
        maxLocalIndex,
        doc: docAsWritten,
        docIsLatest: isLatest,
        prevDocFromSameAuthor: prevSameAuthor,
        prevLatestDoc: prevLatest
      };
    };
    loggerIngest.debug(" >> ingest: running protected region...");
    let ingestEvent = await this._ingestLock.run(writeToDriverWithLock);
    loggerIngest.debug(" >> ingest: ...done running protected region");
    loggerIngest.debug("...send ingest event after releasing the lock");
    loggerIngest.debug("...ingest event:", ingestEvent);
    await this.bus.sendAndWait(`ingest|${docToIngest.path}`, ingestEvent);
    return ingestEvent;
  }
  async overwriteAllDocsByAuthor(keypair) {
    logger10.debug(`overwriteAllDocsByAuthor("${keypair.address}")`);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let docsToOverwrite = await this.queryDocs({
      filter: {author: keypair.address},
      historyMode: "all"
    });
    logger10.debug(`    ...found ${docsToOverwrite.length} docs to overwrite`);
    let numOverwritten = 0;
    let numAlreadyEmpty = 0;
    for (let doc of docsToOverwrite) {
      if (doc.content.length === 0) {
        numAlreadyEmpty += 1;
        continue;
      }
      let cleanedResult = this.formatValidator.removeExtraFields(doc);
      if (isErr(cleanedResult)) {
        return cleanedResult;
      }
      let cleanedDoc = cleanedResult.doc;
      let emptyDoc = __spreadProps(__spreadValues({}, cleanedDoc), {
        content: "",
        contentHash: Crypto.sha256base32(""),
        timestamp: doc.timestamp + 1,
        signature: "?"
      });
      let signedDoc = this.formatValidator.signDocument(keypair, emptyDoc);
      if (isErr(signedDoc)) {
        return signedDoc;
      }
      let ingestEvent = await this.ingest(signedDoc);
      if (ingestEvent.kind === "failure") {
        return new ValidationError("ingestion error during overwriteAllDocsBySameAuthor: " + ingestEvent.reason + ": " + ingestEvent.err);
      }
      if (ingestEvent.kind === "nothing_happened") {
        return new ValidationError("ingestion did nothing during overwriteAllDocsBySameAuthor: " + ingestEvent.reason);
      } else {
        numOverwritten += 1;
      }
    }
    logger10.debug(`    ...done; ${numOverwritten} overwritten to be empty; ${numAlreadyEmpty} were already empty; out of total ${docsToOverwrite.length} docs`);
    return numOverwritten;
  }
};

// src/storage/storage-cache.ts
var import_fast_deep_equal2 = __toModule(require("fast-deep-equal"));
var import_fast_json_stable_stringify = __toModule(require("fast-json-stable-stringify"));
var logger11 = new Logger("storage cache", "cyan");
function sortAndLimit(query, docs) {
  let filteredDocs = [];
  for (let doc of docs) {
    if (query.orderBy === "path ASC") {
      if (query.startAfter !== void 0) {
        if (query.startAfter.path !== void 0 && doc.path <= query.startAfter.path) {
          continue;
        }
      }
    }
    if (query.orderBy === "path DESC") {
      if (query.startAfter !== void 0) {
        if (query.startAfter.path !== void 0 && doc.path >= query.startAfter.path) {
          continue;
        }
      }
    }
    if (query.orderBy === "localIndex ASC") {
      if (query.startAfter !== void 0) {
        if (query.startAfter.localIndex !== void 0 && (doc._localIndex || 0) <= query.startAfter.localIndex) {
          continue;
        }
      }
    }
    if (query.orderBy === "localIndex DESC") {
      if (query.startAfter !== void 0) {
        if (query.startAfter.localIndex !== void 0 && (doc._localIndex || 0) >= query.startAfter.localIndex) {
          continue;
        }
      }
    }
    filteredDocs.push(doc);
    if (query.limit !== void 0 && filteredDocs.length >= query.limit) {
      break;
    }
  }
  return filteredDocs;
}
var StorageCache = class {
  constructor(storage, timeToLive) {
    this._docCache = new Map();
    this._onCacheUpdatedCallbacks = new Set();
    this._storage = storage;
    this._timeToLive = timeToLive || 1e3;
  }
  getAllDocs() {
    if (this._storage.isClosed()) {
      throw new StorageIsClosedError();
    }
    return this.queryDocs({
      historyMode: "all",
      orderBy: "path DESC"
    });
  }
  getLatestDocs() {
    if (this._storage.isClosed()) {
      throw new StorageIsClosedError();
    }
    return this.queryDocs({
      historyMode: "latest",
      orderBy: "path DESC"
    });
  }
  getAllDocsAtPath(path) {
    if (this._storage.isClosed()) {
      throw new StorageIsClosedError();
    }
    return this.queryDocs({
      historyMode: "all",
      orderBy: "path DESC",
      filter: {path}
    });
  }
  getLatestDocAtPath(path) {
    if (this._storage.isClosed()) {
      throw new StorageIsClosedError();
    }
    let docs = this.queryDocs({
      historyMode: "latest",
      orderBy: "path DESC",
      filter: {path}
    });
    if (docs.length === 0) {
      return void 0;
    }
    return docs[0];
  }
  queryDocs(query = {}) {
    let cleanUpQueryResult = cleanUpQuery(query);
    if (cleanUpQueryResult.willMatch === "nothing") {
      return [];
    }
    let queryString = (0, import_fast_json_stable_stringify.default)(cleanUpQueryResult.query);
    const cachedResult = this._docCache.get(queryString);
    if (cachedResult) {
      this._storage.queryDocs(query).then((docs) => {
        this._docCache.set(queryString, __spreadProps(__spreadValues({}, cachedResult), {docs}));
      });
      if (Date.now() > cachedResult.expires) {
        this._storage.queryDocs(query).then((docs) => {
          this._docCache.set(queryString, {
            follower,
            docs,
            expires: Date.now() + this._timeToLive
          });
          logger11.debug("\u231B\uFE0F");
          this._fireOnCacheUpdateds();
        });
      }
      return cachedResult.docs;
    }
    let follower = new QueryFollower(this._storage, __spreadProps(__spreadValues({}, query), {historyMode: "all", orderBy: "localIndex ASC"}));
    follower.bus.on(async (event) => {
      if (event.kind === "existing" || event.kind === "success") {
        logger11.debug("\u{1F423}");
        this._updateCacheOptimistically(event.doc);
      }
    });
    this._docCache.set(queryString, {
      docs: [],
      follower,
      expires: Date.now() + this._timeToLive
    });
    follower.hatch();
    this._storage.queryDocs(query).then((docs) => {
      this._docCache.set(queryString, {
        follower,
        docs,
        expires: Date.now() + this._timeToLive
      });
      logger11.debug("\u{1F479}");
      this._fireOnCacheUpdateds();
    });
    return [];
  }
  set(keypair, docToSet) {
    if (this._storage.isClosed()) {
      throw new StorageIsClosedError();
    }
    let doc = {
      format: "es.4",
      author: keypair.address,
      content: docToSet.content,
      contentHash: Crypto.sha256base32(docToSet.content),
      deleteAfter: null,
      path: docToSet.path,
      timestamp: microsecondNow(),
      workspace: this._storage.workspace,
      signature: "?"
    };
    let signedDoc = this._storage.formatValidator.signDocument(keypair, doc);
    if (isErr(signedDoc)) {
      return {
        kind: "failure",
        reason: "invalid_document",
        err: signedDoc,
        maxLocalIndex: this._storage.storageDriver.getMaxLocalIndex()
      };
    }
    logger11.debug("\u{1F682}");
    this._updateCacheOptimistically(signedDoc);
    this._storage.set(keypair, docToSet);
    return {
      kind: "success",
      maxLocalIndex: this._storage.storageDriver.getMaxLocalIndex(),
      doc: signedDoc,
      docIsLatest: true,
      prevDocFromSameAuthor: null,
      prevLatestDoc: null
    };
  }
  overwriteAllDocsByAuthor(keypair) {
    return this._storage.overwriteAllDocsByAuthor(keypair);
  }
  _updateCacheOptimistically(doc) {
    this._docCache.forEach((entry, key) => {
      const query = JSON.parse(key);
      const appendDoc = () => {
        logger11.debug("\u{1F95E}");
        let nextDocs = [...entry.docs, doc];
        this._docCache.set(key, __spreadProps(__spreadValues({}, entry), {
          docs: sortAndLimit(query, nextDocs)
        }));
        this._fireOnCacheUpdateds();
      };
      const replaceDoc = ({exact}) => {
        logger11.debug("\u{1F504}");
        const nextDocs = entry.docs.map((existingDoc) => {
          if (exact && existingDoc.path === doc.path && existingDoc.author === doc.author) {
            return doc;
          } else if (!exact && existingDoc.path === doc.path) {
            return doc;
          }
          return existingDoc;
        });
        this._docCache.set(key, __spreadProps(__spreadValues({}, entry), {
          docs: sortAndLimit(query, nextDocs)
        }));
        this._fireOnCacheUpdateds();
      };
      const documentsWithSamePath = entry.docs.filter((existingDoc) => existingDoc.path === doc.path);
      const documentsWithSamePathAndAuthor = entry.docs.filter((existingDoc) => existingDoc.path === doc.path && existingDoc.author === doc.author);
      if (documentsWithSamePath.length === 0) {
        if (query.filter && docMatchesFilter(doc, query.filter) || !query.filter) {
          appendDoc();
        }
        return;
      }
      const historyMode = query.historyMode || "latest";
      if (historyMode === "all") {
        if (documentsWithSamePathAndAuthor.length === 0) {
          appendDoc();
          return;
        }
        logger11.debug("\u{1F570}");
        replaceDoc({exact: true});
        return;
      }
      const latestDoc = documentsWithSamePath[0];
      const docIsDifferent = doc.author !== (latestDoc == null ? void 0 : latestDoc.author) || !(0, import_fast_deep_equal2.default)(doc, latestDoc);
      const docIsLater = doc.timestamp > latestDoc.timestamp;
      if (docIsDifferent && docIsLater) {
        logger11.debug("\u231A\uFE0F");
        replaceDoc({exact: false});
        return;
      }
    });
  }
  _fireOnCacheUpdateds() {
    return Promise.all(Array.from(this._onCacheUpdatedCallbacks.values()).map((callback) => {
      return callback();
    }));
  }
  onCacheUpdated(callback) {
    this._onCacheUpdatedCallbacks.add(callback);
    return () => {
      this._onCacheUpdatedCallbacks.delete(callback);
    };
  }
};

// src/storage/storage-driver-async-memory.ts
var logger12 = new Logger("storage driver async memory", "yellow");
var combinePathAndAuthor = (doc) => {
  return `${doc.path}|${doc.author}`;
};
var docComparePathASCthenNewestFirst = (a, b) => {
  return compareArrays([a.path, a.timestamp, a.signature], [b.path, b.timestamp, a.signature], ["ASC", "DESC", "ASC"]);
};
var docComparePathDESCthenNewestFirst = (a, b) => {
  return compareArrays([a.path, a.timestamp, a.signature], [b.path, b.timestamp, a.signature], ["DESC", "DESC", "ASC"]);
};
var StorageDriverAsyncMemory = class {
  constructor(workspace) {
    this._maxLocalIndex = -1;
    this._isClosed = false;
    this._configKv = {};
    this.docByPathAndAuthor = new Map();
    this.docsByPathNewestFirst = new Map();
    logger12.debug("constructor");
    this.workspace = workspace;
  }
  isClosed() {
    return this._isClosed;
  }
  async close(erase) {
    logger12.debug("close");
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    if (erase) {
      logger12.debug("...close: and erase");
      this._configKv = {};
      this._maxLocalIndex = -1;
      this.docsByPathNewestFirst.clear();
      this.docByPathAndAuthor.clear();
    }
    this._isClosed = true;
    logger12.debug("...close is done.");
  }
  async getConfig(key) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return this._configKv[key];
  }
  async setConfig(key, value) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    this._configKv[key] = value;
  }
  async listConfigKeys() {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return sortedInPlace(Object.keys(this._configKv));
  }
  async deleteConfig(key) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let had = key in this._configKv;
    delete this._configKv[key];
    return had;
  }
  getMaxLocalIndex() {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    logger12.debug(`getMaxLocalIndex(): it's ${this._maxLocalIndex}`);
    return this._maxLocalIndex;
  }
  async _getAllDocs() {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    return [...this.docByPathAndAuthor.values()];
  }
  async _getLatestDocs() {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let docs = [];
    for (let docArray of this.docsByPathNewestFirst.values()) {
      docs.push(docArray[0]);
    }
    return docs;
  }
  async queryDocs(queryToClean) {
    var _a2, _b;
    logger12.debug("queryDocs", queryToClean);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let {query, willMatch} = cleanUpQuery(queryToClean);
    logger12.debug(`    cleanUpQuery.  willMatch = ${willMatch}`);
    if (willMatch === "nothing") {
      return [];
    }
    logger12.debug(`    getting docs; historyMode = ${query.historyMode}`);
    let docs = query.historyMode === "all" ? await this._getAllDocs() : await this._getLatestDocs();
    logger12.debug(`    ordering docs: ${query.orderBy}`);
    if (query.orderBy === "path ASC") {
      docs.sort(docComparePathASCthenNewestFirst);
    } else if (query.orderBy === "path DESC") {
      docs.sort(docComparePathDESCthenNewestFirst);
    } else if (query.orderBy === "localIndex ASC") {
      docs.sort(compareByObjKey("_localIndex", "ASC"));
    } else if (query.orderBy === "localIndex DESC") {
      docs.sort(compareByObjKey("_localIndex", "DESC"));
    } else {
      throw new ValidationError("unrecognized query orderBy: " + JSON.stringify(query.orderBy));
    }
    let filteredDocs = [];
    logger12.debug(`    filtering docs`);
    for (let doc of docs) {
      if (query.orderBy === "path ASC") {
        if (query.startAfter !== void 0) {
          if (query.startAfter.path !== void 0 && doc.path <= query.startAfter.path) {
            continue;
          }
        }
      }
      if (query.orderBy === "path DESC") {
        if (query.startAfter !== void 0) {
          if (query.startAfter.path !== void 0 && doc.path >= query.startAfter.path) {
            continue;
          }
        }
      }
      if (query.orderBy === "localIndex ASC") {
        if (query.startAfter !== void 0) {
          if (query.startAfter.localIndex !== void 0 && ((_a2 = doc._localIndex) != null ? _a2 : 0) <= query.startAfter.localIndex) {
            continue;
          }
        }
      }
      if (query.orderBy === "localIndex DESC") {
        if (query.startAfter !== void 0) {
          if (query.startAfter.localIndex !== void 0 && ((_b = doc._localIndex) != null ? _b : 0) >= query.startAfter.localIndex) {
            continue;
          }
        }
      }
      if (query.filter && !docMatchesFilter(doc, query.filter)) {
        continue;
      }
      filteredDocs.push(doc);
      if (query.limit !== void 0 && filteredDocs.length >= query.limit) {
        logger12.debug(`    ....hit limit of ${query.limit}`);
        break;
      }
    }
    logger12.debug(`    queryDocs is done: found ${filteredDocs.length} docs.`);
    return filteredDocs;
  }
  async upsert(doc) {
    var _a2;
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    doc = __spreadValues({}, doc);
    this._maxLocalIndex += 1;
    doc._localIndex = this._maxLocalIndex;
    Object.freeze(doc);
    logger12.debug("upsert", doc);
    this.docByPathAndAuthor.set(combinePathAndAuthor(doc), doc);
    let docsByPath = (_a2 = this.docsByPathNewestFirst.get(doc.path)) != null ? _a2 : [];
    docsByPath = docsByPath.filter((d) => d.author !== doc.author);
    docsByPath.push(doc);
    docsByPath.sort(docComparePathASCthenNewestFirst);
    this.docsByPathNewestFirst.set(doc.path, docsByPath);
    return doc;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cmp,
  ConnectionRefusedError,
  Crypto,
  CryptoDriverTweetnacl,
  DEFAULT_LOG_LEVEL,
  DEFAULT_QUERY,
  EarthstarError,
  FormatValidatorEs4,
  GlobalCryptoDriver,
  LogLevel,
  Logger,
  NetworkError,
  NotFoundError,
  NotImplementedError,
  Peer,
  PeerClient,
  PeerServer,
  QueryFollower,
  QueryFollowerIsClosedError,
  StorageAsync,
  StorageCache,
  StorageDriverAsyncMemory,
  StorageIsClosedError,
  TimeoutError,
  ValidationError,
  alphaLower,
  alphaUpper,
  assembleAuthorAddress,
  assembleWorkspaceAddress,
  authorAddressChars,
  authorKeyChars,
  authorNameChars,
  b32chars,
  b64StringToBytes,
  base32BytesToString,
  base32StringToBytes,
  bufferToBytes,
  bufferToString,
  bytesToBuffer,
  bytesToString,
  checkAuthorIsValid,
  checkInt,
  checkIsPlainObject,
  checkLiteral,
  checkObj,
  checkString,
  checkWorkspaceIsValid,
  cleanUpQuery,
  compareArrays,
  compareBasic,
  compareByFn,
  compareByObjArrayFn,
  compareByObjKey,
  concatBytes,
  decodeAuthorKeypairToBytes,
  deepCopy,
  deepEqual,
  digits,
  docMatchesFilter,
  encodeAuthorKeypairToStrings,
  getLogLevel,
  getLogLevels,
  hexStringToBytes,
  identifyBufOrBytes,
  initialPeerClientState,
  isBuffer,
  isBytes,
  isDigit,
  isErr,
  isOnlyPrintableAscii,
  isPlainObject,
  microsecondNow,
  notErr,
  onlyHasChars,
  parseAddress,
  parseAuthorAddress,
  parseWorkspaceAddress,
  pathChars,
  pathPunctuation,
  randomId,
  saltAndHashWorkspace,
  setDefaultLogLevel,
  setGlobalCryptoDriver,
  setLogLevel,
  sleep,
  sortedInPlace,
  stringLengthInBytes,
  stringToBuffer,
  stringToBytes,
  updateLogLevels,
  workspaceAddressChars,
  workspaceKeyChars,
  workspaceNameChars
});

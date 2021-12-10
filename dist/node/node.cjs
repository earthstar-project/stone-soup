var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/entries/node.ts
__markAsModule(exports);
__export(exports, {
  CryptoDriverNode: () => CryptoDriverNode
});

// src/util/buffers.ts
var bytesToBuffer = (bytes) => Buffer.from(bytes);
var bufferToBytes = (buf) => new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
var stringToBuffer = (str) => Buffer.from(str, "utf-8");

// src/util/bytes.ts
var decoder = new TextDecoder();
var encoder = new TextEncoder();
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

// src/util/log.ts
var import_chalk = __toModule(require("chalk"));
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["None"] = -1] = "None";
  LogLevel2[LogLevel2["Error"] = 0] = "Error";
  LogLevel2[LogLevel2["Warn"] = 1] = "Warn";
  LogLevel2[LogLevel2["Log"] = 2] = "Log";
  LogLevel2[LogLevel2["Info"] = 3] = "Info";
  LogLevel2[LogLevel2["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var DEFAULT_LOG_LEVEL = 0;
var globalLogLevels = {
  _default: DEFAULT_LOG_LEVEL
};
var getLogLevel = (source) => {
  if (source in globalLogLevels) {
    return globalLogLevels[source];
  } else {
    return globalLogLevels._default;
  }
};
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

// src/crypto/crypto-driver-node.ts
var crypto = require("crypto");
var logger = new Logger("crypto-driver-node", "cyan");
var _generateKeypairDerBytes = () => {
  let pair = crypto.generateKeyPairSync("ed25519", {
    publicKeyEncoding: {
      format: "der",
      type: "spki"
    },
    privateKeyEncoding: {
      format: "der",
      type: "pkcs8"
    }
  });
  return {
    pubkey: bufferToBytes(pair.publicKey),
    secret: bufferToBytes(pair.privateKey)
  };
};
var _shortenDer = (k) => ({
  pubkey: k.pubkey.slice(-32),
  secret: k.secret.slice(-32)
});
var _derPrefixPublic = b64StringToBytes("MCowBQYDK2VwAyEA");
var _derPrefixSecret = b64StringToBytes("MC4CAQAwBQYDK2VwBCIEIA==");
var _lengthenDerPublic = (b) => concatBytes(_derPrefixPublic, b);
var _lengthenDerSecret = (b) => concatBytes(_derPrefixSecret, b);
var CryptoDriverNode = class {
  static sha256(input) {
    return bufferToBytes(crypto.createHash("sha256").update(input).digest());
  }
  static generateKeypairBytes() {
    logger.debug("generateKeypairBytes");
    return _shortenDer(_generateKeypairDerBytes());
  }
  static sign(keypairBytes, msg) {
    logger.debug("sign");
    if (typeof msg === "string") {
      msg = stringToBuffer(msg);
    }
    return bufferToBytes(crypto.sign(null, msg, {
      key: bytesToBuffer(_lengthenDerSecret(keypairBytes.secret)),
      format: "der",
      type: "pkcs8"
    }));
  }
  static verify(publicKey, sig, msg) {
    logger.debug("verif");
    if (typeof msg === "string") {
      msg = stringToBuffer(msg);
    }
    try {
      return crypto.verify(null, msg, {
        key: _lengthenDerPublic(publicKey),
        format: "der",
        type: "spki"
      }, sig);
    } catch (e) {
      return false;
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CryptoDriverNode
});

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/storage/util-types.ts
var Cmp;
(function(Cmp2) {
  Cmp2[Cmp2["LT"] = -1] = "LT";
  Cmp2[Cmp2["EQ"] = 0] = "EQ";
  Cmp2[Cmp2["GT"] = 1] = "GT";
})(Cmp || (Cmp = {}));

// src/util/misc.ts
import equal from "fast-deep-equal";
import clone from "rfdc";
var deepEqual = equal;
var deepCopy = clone();

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
  var _a, _b;
  let minLen = Math.min(a.length, b.length);
  for (let ii2 = 0; ii2 < minLen; ii2++) {
    let sortOrder2 = (_a = sortOrders == null ? void 0 : sortOrders[ii2]) != null ? _a : "ASC";
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

// src/query/query-types.ts
var DEFAULT_QUERY = {
  historyMode: "latest",
  orderBy: "path ASC",
  startAfter: void 0,
  limit: void 0,
  filter: void 0
};

// src/util/bytes.ts
var decoder = new TextDecoder();
var encoder = new TextEncoder();
var stringToBytes = (str) => encoder.encode(str);
var stringLengthInBytes = (str) => stringToBytes(str).length;

// src/util/log.ts
import chalk from "chalk";
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
          tag = chalk[this.color](tag);
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

// src/query/query.ts
var logger = new Logger("query", "greenBright");
var cleanUpQuery = (inputQuery) => {
  var _a, _b, _c, _d;
  let query = __spreadValues(__spreadValues({}, DEFAULT_QUERY), inputQuery);
  let invalidResponse = {
    query: {limit: 0},
    isValid: false,
    willMatch: "nothing"
  };
  if (query.limit !== void 0 && query.limit < 0) {
    logger.debug("cleanUpQuery: unreasonable limit - returning empty invalid query", invalidResponse);
    return invalidResponse;
  }
  if (((_a = query.orderBy) == null ? void 0 : _a.startsWith("path")) && ((_b = query.startAfter) == null ? void 0 : _b.localIndex) !== void 0) {
    logger.debug('cleanUpQuery: orderBy is "path" but startAfter is not compatible - returning empty invalid query', invalidResponse);
    return invalidResponse;
  }
  if (((_c = query.orderBy) == null ? void 0 : _c.startsWith("localIndex")) && ((_d = query.startAfter) == null ? void 0 : _d.path) !== void 0) {
    logger.debug('cleanUpQuery: orderBy is "localIndex" but startAfter is not compatible - returning empty invalid query', invalidResponse);
    return invalidResponse;
  }
  ;
  if (query.historyMode !== void 0 && query.historyMode !== "all" && query.historyMode !== "latest") {
    logger.debug(`cleanUpQuery: unknown historyMode ${JSON.stringify(query.historyMode)} - returning empty invalid query`, invalidResponse);
    return invalidResponse;
  }
  if (query.orderBy !== void 0) {
    if (["path ASC", "path DESC", "localIndex ASC", "localIndex DESC"].indexOf(query.orderBy) === -1) {
      logger.debug(`cleanUpQuery: unrecognized orderBy value ${JSON.stringify(query.orderBy)} - returning empty invalid query`, invalidResponse);
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
    logger.debug(`cleanUpQuery - this query will match nothing, so returning a simpler query that also matches nothing`, nopQuery);
    return nopQuery;
  }
  logger.debug(`cleanUpQuery - query is ok!  willMatch = ${willMatch}`);
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

// src/storage/storage-driver-async-memory.ts
var logger2 = new Logger("storage driver async memory", "yellow");
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
    logger2.debug("constructor");
    this.workspace = workspace;
  }
  isClosed() {
    return this._isClosed;
  }
  async close(erase) {
    logger2.debug("close");
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    if (erase) {
      logger2.debug("...close: and erase");
      this._configKv = {};
      this._maxLocalIndex = -1;
      this.docsByPathNewestFirst.clear();
      this.docByPathAndAuthor.clear();
    }
    this._isClosed = true;
    logger2.debug("...close is done.");
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
    logger2.debug(`getMaxLocalIndex(): it's ${this._maxLocalIndex}`);
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
    var _a, _b;
    logger2.debug("queryDocs", queryToClean);
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let {query, willMatch} = cleanUpQuery(queryToClean);
    logger2.debug(`    cleanUpQuery.  willMatch = ${willMatch}`);
    if (willMatch === "nothing") {
      return [];
    }
    logger2.debug(`    getting docs; historyMode = ${query.historyMode}`);
    let docs = query.historyMode === "all" ? await this._getAllDocs() : await this._getLatestDocs();
    logger2.debug(`    ordering docs: ${query.orderBy}`);
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
    logger2.debug(`    filtering docs`);
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
          if (query.startAfter.localIndex !== void 0 && ((_a = doc._localIndex) != null ? _a : 0) <= query.startAfter.localIndex) {
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
        logger2.debug(`    ....hit limit of ${query.limit}`);
        break;
      }
    }
    logger2.debug(`    queryDocs is done: found ${filteredDocs.length} docs.`);
    return filteredDocs;
  }
  async upsert(doc) {
    var _a;
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    doc = __spreadValues({}, doc);
    this._maxLocalIndex += 1;
    doc._localIndex = this._maxLocalIndex;
    Object.freeze(doc);
    logger2.debug("upsert", doc);
    this.docByPathAndAuthor.set(combinePathAndAuthor(doc), doc);
    let docsByPath = (_a = this.docsByPathNewestFirst.get(doc.path)) != null ? _a : [];
    docsByPath = docsByPath.filter((d) => d.author !== doc.author);
    docsByPath.push(doc);
    docsByPath.sort(docComparePathASCthenNewestFirst);
    this.docsByPathNewestFirst.set(doc.path, docsByPath);
    return doc;
  }
};

// src/storage/storage-driver-local-storage.ts
var logger3 = new Logger("storage driver localStorage", "yellowBright");
function isSerializedDriverDocs(value) {
  if (typeof value !== "object") {
    return false;
  }
  return "byPathAndAuthor" in value && "byPathNewestFirst" in value;
}
var StorageDriverLocalStorage = class extends StorageDriverAsyncMemory {
  constructor(workspace) {
    super(workspace);
    logger3.debug("constructor");
    this._localStorageKeyConfig = `stonesoup:config:${workspace}`;
    this._localStorageKeyDocs = `stonesoup:documents:pathandauthor:${workspace}`;
    let existingData = localStorage.getItem(this._localStorageKeyDocs);
    if (existingData !== null) {
      logger3.debug("...constructor: loading data from localStorage");
      let parsed = JSON.parse(existingData);
      if (!isSerializedDriverDocs(parsed)) {
        console.warn(`localStorage data could not be parsed for workspace ${workspace}`);
        return;
      }
      this.docByPathAndAuthor = new Map(Object.entries(parsed.byPathAndAuthor));
      this.docsByPathNewestFirst = new Map(Object.entries(parsed.byPathNewestFirst));
    } else {
      logger3.debug("...constructor: there was no existing data in localStorage");
    }
    logger3.debug("...constructor is done.");
  }
  async close(erase) {
    logger3.debug("close");
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    if (erase) {
      logger3.debug("...close: and erase");
      this._configKv = {};
      this._maxLocalIndex = -1;
      this.docsByPathNewestFirst.clear();
      this.docByPathAndAuthor.clear();
      logger3.debug("...close: erasing localStorage");
      localStorage.removeItem(this._localStorageKeyDocs);
      for (let key of this._listConfigKeysSync()) {
        this._deleteConfigSync(key);
      }
      logger3.debug("...close: erasing is done");
    }
    this._isClosed = true;
    logger3.debug("...close is done.");
  }
  _getConfigSync(key) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    key = `${this._localStorageKeyConfig}:${key}`;
    let result = localStorage.getItem(key);
    return result === null ? void 0 : result;
  }
  _setConfigSync(key, value) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    key = `${this._localStorageKeyConfig}:${key}`;
    localStorage.setItem(key, value);
  }
  _listConfigKeysSync() {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let keys = Object.keys(localStorage).filter((key) => key.startsWith(this._localStorageKeyConfig + ":")).map((key) => key.slice(this._localStorageKeyConfig.length + 1));
    keys.sort();
    return keys;
  }
  _deleteConfigSync(key) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let hadIt = this._getConfigSync(key);
    key = `${this._localStorageKeyConfig}:${key}`;
    localStorage.removeItem(key);
    return hadIt !== void 0;
  }
  async getConfig(key) {
    return this._getConfigSync(key);
  }
  async setConfig(key, value) {
    return this._setConfigSync(key, value);
  }
  async listConfigKeys() {
    return await this._listConfigKeysSync();
  }
  async deleteConfig(key) {
    return this._deleteConfigSync(key);
  }
  async upsert(doc) {
    if (this._isClosed) {
      throw new StorageIsClosedError();
    }
    let upsertedDoc = await super.upsert(doc);
    const docsToBeSerialised = {
      byPathAndAuthor: Object.fromEntries(this.docByPathAndAuthor),
      byPathNewestFirst: Object.fromEntries(this.docsByPathNewestFirst)
    };
    localStorage.setItem(this._localStorageKeyDocs, JSON.stringify(docsToBeSerialised));
    return upsertedDoc;
  }
};
export {
  StorageDriverLocalStorage
};

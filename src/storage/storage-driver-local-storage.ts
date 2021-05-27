import { Doc, Path, WorkspaceAddress } from "../util/doc-types";
import { StorageDriverAsyncMemory } from "./storage-driver-async-memory";

type SerializedDriverDocs = {
  byPathAndAuthor: Map<string, Doc>;
  byPathNewestFirst: Map<Path, Doc[]>;
};

function isSerializedDriverDocs(value: any): value is SerializedDriverDocs {
  if (typeof value !== "object") {
    return false;
  }

  if (
    "byPathAndAuthor" in value &&
    "byPathNewestFirst" in value &&
    value.byPathAndAuthor instanceof Map &&
    value.byPathNewestFirst instanceof Map
  ) {
    return true;
  }

  return false;
}

export class StorageDriverLocalStorage extends StorageDriverAsyncMemory {
  _localStorageKeyConfig: string;
  _localStorageKeyDocs: string;

  constructor(workspace: WorkspaceAddress) {
    super(workspace);

    this._localStorageKeyConfig = `earthstar:config:${workspace}`;
    this._localStorageKeyDocs = `earthstar:documents:pathandauthor:${workspace}`;

    let existingData = localStorage.getItem(this._localStorageKeyDocs);

    if (existingData !== null) {
      let parsed = JSON.parse(existingData);

      if (!isSerializedDriverDocs(parsed)) {
        return;
      }

      this.docByPathAndAuthor = parsed.byPathAndAuthor;
      this.docsByPathNewestFirst = parsed.byPathNewestFirst;
    }
  }

  async getConfig(key: string): Promise<string | undefined> {
    key = `${this._localStorageKeyConfig}:${key}`;
    let result = localStorage.getItem(key);
    return result === null ? undefined : result;
  }
  
  async setConfig(key: string, value: string): Promise<void> {
    super.setConfig(key, value);

    key = `${this._localStorageKeyConfig}:${key}`;
    localStorage.setItem(key, value);
  }

  async deleteConfig(key: string): Promise<boolean> {
    let had = super.deleteConfig(key);
    
    key = `${this._localStorageKeyConfig}:${key}`;
    localStorage.removeItem(key);
    
    return had;
  }

  async upsert(doc: Doc): Promise<Doc> {
    let upsertedDoc = super.upsert(doc);

    const docsToBeSerialised: SerializedDriverDocs = {
      byPathAndAuthor: this.docByPathAndAuthor,
      byPathNewestFirst: this.docsByPathNewestFirst,
    };

    // Todo: Debouncing of writing in-memory values to localStorage.
    localStorage.setItem(
      this._localStorageKeyDocs,
      JSON.stringify(docsToBeSerialised)
    );

    return upsertedDoc;
  }
}

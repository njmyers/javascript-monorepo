import {
  mimeify,
  pathify,
  objectify,
  readSync,
  readAsync,
  normalizeExtension,
} from './utils';

import { Mime } from './utils/mimeify';

export interface Options {
  /** boolean option to return mime information for all files: default false */
  mime?: boolean;
  /** boolean option to return absolute paths for all files default: true */
  absolute?: boolean;
  /** boolean option to search the directory recursively */
  recursive?: boolean;
  /** boolean option to read the files and return the contents as a string */
  read?: boolean;
  /** string or array of file types to filter (include) */
  filter?: string | string[];
}

/** Return Object */
export interface FileDescriptor {
  /** the path of the file */
  path?: string;
  /** whether it was included (will always be true) */
  include?: boolean;
  /** the mime information */
  mime?: Mime;
  /** the file contents */
  file?: string | null;
}

const defaults: Options = {
  absolute: true,
  recursive: false,
  mime: false,
  read: false,
  filter: undefined,
};

class File {
  path: string;
  options: Options;

  constructor(path: string, options?: Options) {
    this.path = path;
    this.options = {
      ...defaults,
      ...options,
    };
  }

  isFiltered(): boolean {
    if (!this.options.filter) {
      return false;
    }

    const { extension } = mimeify(this.path);
    const fileTypeOrTypes = this.options.filter;

    return Array.isArray(fileTypeOrTypes)
      ? !fileTypeOrTypes.map(normalizeExtension).includes(extension)
      : extension !== normalizeExtension(fileTypeOrTypes);
  }

  toDescriptor(): FileDescriptor | null {
    if (this.isFiltered()) {
      return null;
    }

    const fileDescriptor: FileDescriptor = objectify(this.path);

    if (this.options.absolute) {
      fileDescriptor.path = pathify(this.path);
    } else {
      fileDescriptor.path = this.path;
    }

    if (this.options.mime || this.options.filter) {
      fileDescriptor.mime = mimeify(this.path);
    }

    if (this.options.read) {
      fileDescriptor.file = readSync(this.path);
    }

    return fileDescriptor;
  }

  async toAsyncDescriptor(): Promise<FileDescriptor | null> {
    if (this.isFiltered()) {
      return null;
    }

    const fileDescriptor: FileDescriptor = objectify(this.path);

    if (this.options.absolute) {
      fileDescriptor.path = pathify(this.path);
    } else {
      fileDescriptor.path = this.path;
    }

    if (this.options.mime) {
      fileDescriptor.mime = mimeify(this.path);
    }

    if (this.options.read) {
      fileDescriptor.file = await readAsync(this.path);
    }

    return fileDescriptor;
  }

  toString(): string | null {
    if (this.isFiltered()) {
      return null;
    }

    if (this.options.absolute) {
      return pathify(this.path);
    } else {
      return this.path;
    }
  }

  getResponse(): FileDescriptor | string | null {
    return this.options.mime || this.options.read || this.options.filter
      ? this.toDescriptor()
      : this.toString();
  }

  async getAsyncResponse(): Promise<FileDescriptor | string | null> {
    return this.options.mime || this.options.read || this.options.filter
      ? this.toAsyncDescriptor()
      : this.toString();
  }
}

export default File;

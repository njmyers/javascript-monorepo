# Directory

Reads all the files within a directory. Returns absolute or relative paths, mime types and file contents. Filter your files based on file extensions and recursively (or not) read the whole directory. Like `'fs'` but with some extras for sure!

## Usage

```js
import directory from '@njmyers/directory';

const files = directory('../path/to/folder/or/file', { ...Options })

const Options = {
  /** boolean option to return mime information for all files: default false */
  mime: boolean,
  /** boolean option to return absolute paths for all files default: true */
  absolute: boolean,
  /** boolean option to search the directory recursively default: false */
  recursive: boolean,
  /** boolean option to read the files and return the contents as a string default: false */
  read: boolean,
  /** string or array of file types to filter (include) default: false */
  filter: string | Array<string>,
};

/** Returns an Array of FileObjects */
const FileObject = {
  /** the path of the file */
  path: string,
  /** whether it was included (will always be true) */
  include: boolean,
  /** the mime information */
  mime: {
    /** the content type ie text/css */
    contentType: string,
    /** the file extension with no leading period */
    extension: string,
  },
  /** the file contents */
  file: string,
};
```
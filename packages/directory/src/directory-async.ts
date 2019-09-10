import { pipeAsync } from 'smalldash';

import {
  filterify,
  mimeify,
  pathify,
  objectify,
  readDirectoryAsync,
  readAsync,
} from './utils';

// types
import { FileObject, Options } from './types';

/** default options */
const defaults = {
  absolute: true,
  recursive: false,
  depth: Infinity,
  mime: false,
  read: false,
  filter: undefined,
};

/**
 * Looks up files within a directory and pass options to indicate the return
 * type. Options include returning relative or absolute paths, as well as
 * recursively looking in the directory, adding mime contentType and extension,
 * reading the contents of the file and filtering out files by extension.
 */
async function directoryAsync(
  dir: string,
  options: Options = defaults
): Promise<FileObject[]> {
  const list = await readDirectoryAsync(dir, options);
  const { absolute, mime, read, filter } = options;

  const pipeline = []
    .concat(absolute || read ? pathify : [])
    .concat(mime || read || filter ? objectify : [])
    .concat(mime || filter ? mimeify : [])
    .concat(filter ? filterify(filter) : [])
    .concat(read ? readAsync : []);

  if (pipeline.length < 1) {
    return list;
  }

  const fileObjects = await Promise.all(list.map(pipeAsync(...pipeline)));
  return fileObjects.filter(obj => obj.include || typeof obj === 'string');
}

export default directoryAsync;

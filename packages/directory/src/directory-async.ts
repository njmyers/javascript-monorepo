// @ts-nocheck
import pipeAsync from '../../smalldash/src/async/pipe-async';
import defaults from './default-options';
import {
  filterify,
  mimeify,
  pathify,
  objectify,
  readDirectoryAsync,
  readAsync,
} from './utils';
import { EMPTY_ARRAY } from './constants';

// types
import { FileObject, Options } from './types';

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

  const pipeline: Function[] = []
    .concat(absolute || read ? pathify : EMPTY_ARRAY)
    .concat(mime || read || filter ? objectify : EMPTY_ARRAY)
    .concat(mime || filter ? mimeify : EMPTY_ARRAY)
    .concat(filter ? filterify(filter) : EMPTY_ARRAY)
    .concat(read ? readAsync : EMPTY_ARRAY);

  // @ts-ignore
  const fileObjects = await Promise.all(list.map(pipeAsync(...pipeline)));
  return fileObjects.filter(
    (obj: FileObject) => (obj && obj.include) || typeof obj === 'string'
  );
}

export default directoryAsync;

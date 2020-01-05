// @ts-nocheck
import pipe from '../../smalldash/src/functional/pipe';
import defaults from './default-options';
import {
  filterify,
  mimeify,
  pathify,
  objectify,
  readDirectorySync,
  readSync,
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
function directory(dir: string, options: Options = defaults): FileObject[] {
  const list = readDirectorySync(dir, options);
  const { absolute, mime, read, filter } = options;

  const pipeline: Function[] = []
    .concat(absolute || read ? pathify : EMPTY_ARRAY)
    .concat(mime || read || filter ? objectify : EMPTY_ARRAY)
    .concat(mime || filter ? mimeify : EMPTY_ARRAY)
    .concat(filter ? filterify(filter) : EMPTY_ARRAY)
    .concat(read ? readSync : EMPTY_ARRAY);

  // map through our pipeline
  // finally apply the filtering for our safe results array
  // if we are in "only paths" mode then we won't have an object
  // if we have an object we default to include unless we add a filter
  // @ts-ignore
  return list
    .map(pipe(...pipeline))
    .filter(
      (obj: FileObject) => (obj && obj.include) || typeof obj === 'string'
    );
}

export default directory;

import { pipe } from 'smalldash';
import defaults from './default-options';
import {
  filterify,
  mimeify,
  pathify,
  objectify,
  readDirectorySync,
  readSync,
} from './utils';
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

  const pipeline = []
    .concat(absolute || read ? pathify : [])
    .concat(mime || read || filter ? objectify : [])
    .concat(mime || filter ? mimeify : [])
    .concat(filter ? filterify(filter) : [])
    .concat(read ? readSync : []);

  return pipeline.length > 0
    ? list
        // map through our pipeline
        .map(pipe(...pipeline))
        // finally apply the filtering for our safe results array
        // if we are in "only paths" mode then we won't have an object
        // if we have an object we default to include unless we add a filter
        .filter(obj => obj.include || typeof obj === 'string')
    : list;
}

export default directory;

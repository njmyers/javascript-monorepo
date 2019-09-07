import { pipe } from 'smalldash';

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

/** default options */
const defO = {
  absolute: true,
  recursive: false,
  mime: false,
  read: false,
  filter: false,
};

/**
 * Looks up files with options including a return of relative or absolute paths
 * Recursively look up the directory
 * Add mime contentType and extension
 * @param  {string} dir       the relative or absolute path to read
 * @param  {Options} options  the options object
 * @return {array}            an array of file objects containing your information
 */
function directory(dir: string, options: Options = defO): Array<FileObject> {
  const list = readDirectorySync(dir, options);

  const pipeline = []
    .concat(options.absolute || options.read ? pathify : [])
    .concat(options.mime || options.read || options.filter ? objectify : [])
    .concat(options.mime || options.filter ? mimeify : [])
    .concat(options.filter ? filterify(options.filter) : [])
    .concat(options.read ? readSync : []);

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

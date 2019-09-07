import fs from 'fs';
import { FileObject } from '../types';

/**
 * Reads the contents of the file and adds it to the object as a string. We are
 * assuming utf8 enconding and that the return type should be a string.
 *
 * TODO: Add support for additional fs options
 */
function readSync(fileObject: FileObject): FileObject {
  return {
    ...fileObject,
    file: fileObject.include
      ? fs.readFileSync(fileObject.path, 'utf8').toString()
      : null,
  };
}

export default readSync;

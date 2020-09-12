import fs from 'fs';
import { FileObject } from '../types';

/**
 * Reads the contents of the file and adds it to the object as a string. We are
 * assuming utf8 enconding and that the return type should be a string.
 */
function readSync(fileObject: FileObject): FileObject {
  if (!fileObject.path) {
    return fileObject;
  }

  return {
    ...fileObject,
    file: fileObject.include
      ? fs.readFileSync(fileObject.path, 'utf8').toString()
      : null,
  };
}

export default readSync;

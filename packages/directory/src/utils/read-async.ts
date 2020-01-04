// @ts-nocheck
import fs from 'fs';
import { FileObject } from '../types';

/**
 * Reads the contents of the file and adds it to the object as a string. We are
 * assuming utf8 enconding and that the return type should be a string.
 *
 * TODO: Add support for additional fs options
 */
function readAsync(fileObject: FileObject): Promise<FileObject> {
  return new Promise((resolve, reject) => {
    if (!fileObject.include) {
      return resolve({
        ...fileObject,
        file: null,
      });
    }

    fs.readFile(fileObject.path, 'utf8', (error: Error, file: Buffer) => {
      if (error) {
        return reject(error);
      }

      return resolve({
        ...fileObject,
        file: file.toString(),
      });
    });
  });
}

export default readAsync;

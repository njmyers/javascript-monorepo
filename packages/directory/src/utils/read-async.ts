import fs from 'fs';
import isString from './is-string';
import { FileObject } from '../types';

/**
 * Read a file contents and add it to the file object
 *
 * @param fileObject - The file object
 * @returns A promise that resolves to the file object with contents added
 */
function readAsync(fileObject: FileObject): Promise<FileObject> {
  return new Promise((resolve, reject) => {
    if (!isString(fileObject.path)) {
      return reject(new Error('Tried to read a file path that does not exist'));
    }

    if (!fileObject.include) {
      return resolve({
        ...fileObject,
        file: null,
      });
    }

    fs.readFile(fileObject.path, 'utf8', (error, file) => {
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

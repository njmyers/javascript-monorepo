import fs from 'fs';

import { FileObject } from '../types';

/**
 * Reads the file and adds it to the object
 * @param  {FileObject} obj a file object with the required path property
 * @return {FileObject}     a file object with the file contents added in
 */
function readSync(obj: FileObject): FileObject {
  return {
    ...obj,
    file: obj.include ? fs.readFileSync(obj.path, 'utf8').toString() : null,
  };
}

export default readSync;

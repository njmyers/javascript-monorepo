import fs from 'fs';

/**
 * Use the file system to check synchronously whether a path is a file or a
 * directory and return the result.
 */
function isFileSync(file: string): boolean {
  return fs.statSync(file).isFile();
}

export default isFileSync;

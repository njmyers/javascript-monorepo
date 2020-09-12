import fs from 'fs';

/**
 * Reads the contents of the file and adds it to the object as a string. We are
 * assuming utf8 enconding and that the return type should be a string.
 */
function readSync(filePath: string): string {
  return fs.readFileSync(filePath, 'utf8').toString();
}

export default readSync;

import fs from 'fs';

/**
 * Return whether a path is a file or a directory
 *
 * @param file - The file path
 * @returns Whether the path is a file
 */
function isFileSync(file: string): boolean {
  return fs.statSync(file).isFile();
}

export default isFileSync;

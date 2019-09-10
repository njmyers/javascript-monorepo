import fs from 'fs';
import path from 'path';

import isFileSync from './is-file-sync';
import flatten from './flatten';
import { Options } from '../types';

/**
 * Synchronously read a directory and returns an array of all of the paths. Use
 * the recursive option to read a directory up to a specified depth. If you
 * input relative paths you will receive relative paths. If you input absolute
 * paths you will receive absolute paths.
 */
function readDirectorySync(directory: string, options: Options = {}): string[] {
  if (isFileSync(directory)) {
    return [directory];
  }

  const directoryContents = fs.readdirSync(directory, 'utf8').map(name => {
    const filePath = path.resolve(directory, name);
    const isFile = isFileSync(filePath);

    if (options.recursive && isFile) {
      return filePath;
    }

    if (options.recursive && !isFile) {
      return readDirectorySync(filePath, options);
    }

    if (isFile) {
      return filePath;
    }

    return null;
  });

  if (!directoryContents) {
    return [];
  }

  if (!Array.isArray(directoryContents)) {
    return [directoryContents].filter(Boolean);
  }

  return flatten(directoryContents).filter(Boolean);
}

export default readDirectorySync;

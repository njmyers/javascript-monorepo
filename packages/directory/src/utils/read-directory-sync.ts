import fs from 'fs';
import path from 'path';

import isFileSync from './is-file-sync';
import flatten from './flatten';
import isString from './is-string';

import { Options } from '../types';

/**
 * Synchronously read a directory and returns an array of all of the paths.
 *
 * @param directory - The directory to read.
 * @param options.recursive - Read all files in the directory recursively.
 * @returns An array of file paths
 */
function readDirectorySync(directory: string, options: Options = {}): string[] {
  if (isFileSync(directory)) {
    return [directory];
  }

  const directoryContents = fs.readdirSync(directory, 'utf8').map(name => {
    const filePath = path.resolve(directory, name);
    const isFile = isFileSync(filePath);

    if (isFile) {
      return filePath;
    }

    if (options.recursive && !isFile) {
      return readDirectorySync(filePath, options);
    }

    return null;
  });

  if (!directoryContents) {
    return [];
  }

  if (!Array.isArray(directoryContents)) {
    return [directoryContents];
  }

  return flatten<unknown>(directoryContents).filter(isString);
}

export default readDirectorySync;

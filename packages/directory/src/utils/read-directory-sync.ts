import fs from 'fs';
import path from 'path';

import isFileSync from './is-file-sync';
import flatten from './flatten';
import { Options } from '../types';

/**
 * Return if a value is a string
 *
 * @param value - A value to test
 * @returns Boolean indicating if the value is string
 */
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Synchronously read a directory and returns an array of all of the paths.
 *
 * @param directory - The directory to read.
 * @param options.recursive - Read all files in the directory recursively.
 * @param options.absolute - Return all paths as absolute rather then relative.
 * @returns An array of file paths
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
    return [directoryContents];
  }

  return flatten<unknown>(directoryContents).filter(isString);
}

export default readDirectorySync;

import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import isFileAsync from './is-file-async';
import isString from './is-string';
import flatten from './flatten';

import { Options } from '../types';

const readShallowTree = promisify(fs.readdir);

/**
 * Asynchronously read a directory and return an array of all of the paths.
 *
 * @param directory - The directory to read.
 * @param options.recursive - Read all files in the directory recursively.
 * @returns An array of file paths
 */
async function readDirectoryAsync(
  directory: string,
  options: Options = {}
): Promise<string[]> {
  if (await isFileAsync(directory)) {
    return [directory];
  }

  const readFullTree = async (shallowTree: string[]): Promise<string[]> => {
    const fullTree = await Promise.all(
      shallowTree.map(async (name: string) => {
        const filePath = path.resolve(directory, name);
        const isFile = await isFileAsync(filePath);

        if (isFile) {
          return filePath;
        }

        if (options.recursive && !isFile) {
          return await readDirectoryAsync(filePath, options);
        }

        return null;
      })
    );

    return flatten<unknown>(fullTree).filter(isString);
  };

  const shallowTree = await readShallowTree(directory, 'utf8');
  return await readFullTree(shallowTree);
}

export default readDirectoryAsync;

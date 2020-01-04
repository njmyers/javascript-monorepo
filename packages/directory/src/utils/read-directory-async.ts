import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import pipeAsync from 'smalldash/async/pipe-async';

import isFileAsync from './is-file-async';
import flatten from './flatten';
import { Options } from '../types';

const readdirAsync = promisify(fs.readdir);

/**
 * Asynchronously read a directory and returns an array of all of the paths. Use
 * the recursive option to read a directory up to a specified depth. If you
 * input relative paths you will receive relative paths. If you input absolute
 * paths you will receive absolute paths.
 */
async function readDirectoryAsync(
  directory: string,
  options: Options = {}
): Promise<string[]> {
  if (await isFileAsync(directory)) {
    return [directory];
  }

  return await pipeAsync(
    readdirAsync,
    (directoryContents: string[]) =>
      Promise.all(
        directoryContents.map(async (name: string) => {
          const filePath = path.resolve(directory, name);
          const isFile = await isFileAsync(filePath);

          if (options.recursive && isFile) {
            return filePath;
          }

          if (options.recursive && !isFile) {
            return await readDirectoryAsync(filePath, options);
          }

          if (isFile) {
            return filePath;
          }

          return null;
        })
      ),
    flatten
  )(directory, 'utf8');
}

export default readDirectoryAsync;

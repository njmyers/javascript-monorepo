import fs from 'fs';
import isFileSync from './is-file-sync';

import { Options } from '../types';

/**
 * Reads a directory and returns an array of their paths.
 * If you input relative paths you will receive relative paths.
 * If you input absolute paths you will receive absolute paths.
 */
function readDirectorySync(dir: string, options: Options = {}): string[] {
  return isFileSync(dir)
    ? [dir]
    : []
        .concat(
          ...fs.readdirSync(dir).map(name => {
            const filePath = `${dir}/${name}`;
            return options.recursive
              ? isFileSync(filePath)
                ? filePath
                : readDirectorySync(filePath, options)
              : isFileSync(filePath)
              ? filePath
              : '';
          })
        )
        .filter(string => string);
}
export default readDirectorySync;

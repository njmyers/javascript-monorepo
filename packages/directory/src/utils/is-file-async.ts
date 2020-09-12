import fs from 'fs';

/**
 * Return whether a path is a file or a directory
 *
 * @param file - The file path
 * @returns A promise that resolves to whether the path is a file
 */
function isFileAsync(file: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stats) => {
      if (err) {
        return reject(err);
      }

      resolve(stats.isFile());
    });
  });
}

export default isFileAsync;

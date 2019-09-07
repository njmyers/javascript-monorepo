import fs from 'fs';

/**
 * Use the file system to check asynchronously whether a path is a file or a
 * directory and return a promise of the result.
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

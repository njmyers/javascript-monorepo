import fs from 'fs';

/**
 * Read a file contents and add it to the file object
 *
 * @param filePath - The file object
 * @returns A promise that resolves to the file object with contents added
 */
function readAsync(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, file) => {
      if (error) {
        return reject(error);
      }

      return resolve(file.toString());
    });
  });
}

export default readAsync;

import path from 'path';
import fs from 'fs';
import readDirectoryKeys from '../read-directory-keys';

const files = readDirectoryKeys(path.resolve(__dirname, 'helpers'));

test('reads paths correctly', () => {
  expect(files[0]).toBe(__dirname + '/helpers/file-2.js');
});

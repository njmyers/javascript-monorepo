import fs from 'fs';
import path from 'path';
import addContentLength from '../add-content-length';
import readDirectoryKeys from '../read-directory-keys';

const keys = readDirectoryKeys(path.resolve(__dirname, 'helpers'));
const Key = keys[0];
const ContentLength = fs.statSync(Key).size;

const container = {
  Key,
};

test('add content length key correctly', () => {
  expect(addContentLength(container)).toMatchObject({
    Key,
    ContentLength,
  });
});

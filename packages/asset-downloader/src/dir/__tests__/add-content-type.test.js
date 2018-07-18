import path from 'path';
import mime from 'mime-types';
import addContentType from '../add-content-type';
import readDirectoryKeys from '../read-directory-keys';

const keys = readDirectoryKeys(path.resolve(__dirname, 'helpers'));
const Key = keys[0];

const container = {
  Key,
};

const typed = addContentType(container);

test('add content type key correctly', () => {
  expect(typed).toHaveProperty('ContentType');
});

test('add content type value correctly', () => {
  expect(typed).toHaveProperty('ContentType', mime.lookup(Key));
});

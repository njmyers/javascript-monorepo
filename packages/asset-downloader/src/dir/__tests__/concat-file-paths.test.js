const concateFilePaths = require('../concat-file-paths');

const stub = 'current/something';
const add = '123adf';
const expected = '123adf/current/something';

test('file paths concat correctly', () => {
  const result = concateFilePaths(add, stub);
  expect(result).toBe(expected);
});

import fs from 'fs';
import path from 'path';

const dir = path.resolve(process.cwd(), '__tests__');

describe('it reads the directory recursively', () => {
  test('sanity test - if this fails run jest from the project root', () => {
    expect(dir).toBe(__dirname);
  });

  test('it reads correctly a file', () => {
    expect(directory(path.resolve(dir, 'test.txt'))).toBe(['file.txt']);
  });
});

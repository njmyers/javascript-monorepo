import isFileSync from '../is-file-sync';

import {
  JS_FILE_PATH,
  SHALLOW_FOLDER_PATH,
} from '../../__tests__/fixtures/data';

describe('utils/isFileSync', () => {
  test('it is a function ', () => {
    expect(typeof isFileSync).toBe('function');
  });

  test('it returns true for a file that exists', () => {
    expect(isFileSync(JS_FILE_PATH)).toBe(true);
  });

  test('it returns false for a directory that exists', () => {
    expect(isFileSync(SHALLOW_FOLDER_PATH)).toBe(false);
  });
});

import isFileAsync from '../is-file-async';

import { JS_FILE_PATH, SHALLOW_FOLDER_PATH } from '../../__fixtures__/data';

describe('utils/isFileAsync', () => {
  test('it is a function ', () => {
    expect(typeof isFileAsync).toBe('function');
  });

  test('it returns true for a file that exists', () => {
    return isFileAsync(JS_FILE_PATH).then(boolean => {
      expect(boolean).toBe(true);
    });
  });

  test('it returns false for a directory that exists', () => {
    return isFileAsync(SHALLOW_FOLDER_PATH).then(boolean => {
      expect(boolean).toBe(false);
    });
  });
});

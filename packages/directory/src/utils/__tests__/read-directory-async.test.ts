import path from 'path';
import readDirectoryAsync from '../read-directory-async';

import {
  SHALLOW_FOLDER_PATH,
  SHALLOW_FOLDER_DATA,
  DEEP_FOLDER_PATH,
  DEEP_FOLDER_DATA,
  SINGLE_FILE_PATH,
  SINGLE_FILE_DATA,
} from '../../__fixtures__/data';

/**
 * These tests can be maddening.
 * Since we run jest from the repo root process.cwd() is the repo root.
 * Remember that and try not to run jest from any other directory.
 * Otherwise you may literally lose your sanity.
 */

describe('utils/readDirectoryAsync', () => {
  test('sanity test - if this fails run jest from the monorepo root', () => {
    expect(__dirname).toBe(
      path.resolve(process.cwd(), 'packages/directory/src/utils/__tests__')
    );
  });

  test('it reads a file defined locally', () => {
    return readDirectoryAsync('package.json').then(directoryContents => {
      expect(directoryContents).toMatchObject(['package.json']);
    });
  });

  /** This ends the local section from here on let's deal with absolute paths */

  test('it reads a file defined absolutely', () => {
    return readDirectoryAsync(SINGLE_FILE_PATH, {
      recursive: true,
    }).then(directoryContents => {
      expect(directoryContents).toMatchObject(
        SINGLE_FILE_DATA.map(fileObject => fileObject.path)
      );
    });
  });

  test('it reads a folder defined absolutely of depth = 1', () => {
    return readDirectoryAsync(SHALLOW_FOLDER_PATH).then(directoryContents => {
      expect(directoryContents).toMatchObject(
        SHALLOW_FOLDER_DATA.map(fileObject => fileObject.path)
      );
    });
  });

  test('it reads a folder defined absolutely of depth > 1', () => {
    return readDirectoryAsync(DEEP_FOLDER_PATH, { recursive: true }).then(
      directoryContents => {
        expect(directoryContents).toMatchObject(
          DEEP_FOLDER_DATA.map(fileObject => fileObject.path)
        );
      }
    );
  });
});

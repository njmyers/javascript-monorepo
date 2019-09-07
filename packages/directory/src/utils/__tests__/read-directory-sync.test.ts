import path from 'path';
import readDirectorySync from '../read-directory-sync';

/**
 * These tests can be maddening.
 * Since we run jest from the repo root process.cwd() is the repo root.
 * Remember that and try not to run jest from any other directory.
 * Otherwise you may literally lose your sanity.
 */

describe('utils/readDirectorySync', () => {
  test('sanity test - if this fails run jest from the monorepo root', () => {
    expect(__dirname).toBe(
      path.resolve(process.cwd(), 'packages/directory/src/utils/__tests__')
    );
  });

  test('it reads a file defined locally', () => {
    expect(readDirectorySync('package.json')).toMatchObject(['package.json']);
  });

  /** This ends the local section from here on let's deal with absolute paths */

  test('it reads a file defined absolutely', () => {
    expect(
      readDirectorySync(path.resolve(__dirname, 'helpers/test.txt'), {
        recursive: true,
      })
    ).toMatchObject([path.resolve(__dirname, 'helpers/test.txt')]);
  });

  test('it reads a folder defined absolutely of depth = 1', () => {
    expect(
      readDirectorySync(path.resolve(__dirname, 'helpers/folder'))
    ).toMatchObject([
      `${__dirname}/helpers/folder/file.txt`,
      `${__dirname}/helpers/folder/otherfile.txt`,
    ]);
  });

  test('it reads a folder defined absolutely of depth > 1', () => {
    expect(
      readDirectorySync(path.resolve(__dirname, 'helpers/recursive'), {
        recursive: true,
      })
    ).toMatchObject([
      `${__dirname}/helpers/recursive/file.txt`,
      `${__dirname}/helpers/recursive/folder/file.txt`,
      `${__dirname}/helpers/recursive/folder/otherfile.js`,
      `${__dirname}/helpers/recursive/folder/thing/file.txt`,
    ]);
  });
});

import fs from 'fs';
import path from 'path';
import directory, { readDirectory } from '../directory';

const testDirectory = __dirname;

/**
 * These tests can be maddening.
 * Since we run jest from the repo root process.cwd() is the repo root.
 * Remember that and try not to run jest from any other directory.
 * Otherwise you may literally lose your sanity.
 */

describe('it reads the directory - unit test for readDirectory', () => {
  test('sanity test - if this fails run jest from the monorepo root', () => {
    expect(__dirname).toBe(
      path.resolve(process.cwd(), 'packages/directory/src/__tests__')
    );
  });

  test('it reads a file defined locally', () => {
    expect(readDirectory('package.json')).toMatchObject(['package.json']);
  });

  /** This ends the local section from here on let's deal with absolute paths */

  test('it reads a file defined absolutely', () => {
    expect(
      readDirectory(path.resolve(__dirname, 'helpers/test.txt'), {
        recursive: true,
      })
    ).toMatchObject([path.resolve(__dirname, 'helpers/test.txt')]);
  });

  test('it reads a folder defined absolutely of depth = 1', () => {
    expect(
      readDirectory(path.resolve(__dirname, 'helpers/folder'))
    ).toMatchObject([
      '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/folder/file.txt',
      '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/folder/otherfile.txt',
    ]);
  });

  test('it reads a folder defined absolutely of depth > 1', () => {
    expect(
      readDirectory(path.resolve(__dirname, 'helpers/recursive'), {
        recursive: true,
      })
    ).toMatchObject([
      '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/recursive/file.txt',
      '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/recursive/folder/file.txt',
      '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/recursive/folder/otherfile.js',
    ]);
  });
});

describe('it reads the directory and uses options', () => {
  /** testing with local paths */
  test('it returns absolute paths automatically', () => {
    expect(directory('package.json')).toMatchObject([
      path.resolve(process.cwd(), 'package.json'),
    ]);
  });

  /** testing with absolute paths */
  test('it reads a folder defined absolutely of depth > 1', () => {
    expect(
      directory(path.resolve(__dirname, 'helpers/recursive'), {
        recursive: true,
      })
    ).toMatchObject([
      '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/recursive/file.txt',
      '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/recursive/folder/file.txt',
      '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/recursive/folder/otherfile.js',
    ]);
  });

  test('it reads a file and adds mime information', () => {
    expect(
      directory(path.resolve(__dirname, 'helpers/test.txt'), {
        mime: true,
      })
    ).toMatchObject([
      {
        path:
          '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/test.txt',
        mime: {
          contentType: 'text/plain',
          extension: 'txt',
        },
      },
    ]);
  });

  test('it reads a directory and adds mime information', () => {
    expect(
      directory(path.resolve(__dirname, 'helpers/recursive'), {
        mime: true,
        recursive: true,
      })
    ).toMatchObject([
      {
        mime: { contentType: 'text/plain', extension: 'txt' },
        path:
          '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/recursive/file.txt',
      },
      {
        mime: { contentType: 'text/plain', extension: 'txt' },
        path:
          '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/recursive/folder/file.txt',
      },
      {
        mime: { contentType: 'application/javascript', extension: 'js' },
        path:
          '/home/developer/Documents/monorepo/packages/directory/src/__tests__/helpers/recursive/folder/otherfile.js',
      },
    ]);
  });
});

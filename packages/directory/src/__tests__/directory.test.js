import fs from 'fs';
import path from 'path';
import directory, { readDirectory, read } from '../directory';

const homedir = require('os').homedir();

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
      `${__dirname}/helpers/folder/file.txt`,
      `${__dirname}/helpers/folder/otherfile.txt`,
    ]);
  });

  test('it reads a folder defined absolutely of depth > 1', () => {
    expect(
      readDirectory(path.resolve(__dirname, 'helpers/recursive'), {
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

describe('it reads the directory and uses options', () => {
  /** testing with local paths */
  test('it returns absolute paths automatically', () => {
    const pkg = directory('package.json');

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
      `${__dirname}/helpers/recursive/file.txt`,
      `${__dirname}/helpers/recursive/folder/file.txt`,
      `${__dirname}/helpers/recursive/folder/otherfile.js`,
      `${__dirname}/helpers/recursive/folder/thing/file.txt`,
    ]);
  });

  test('it reads a file and adds mime information', () => {
    expect(
      directory(path.resolve(__dirname, 'helpers/test.txt'), {
        mime: true,
      })
    ).toMatchObject([
      {
        path: `${__dirname}/helpers/test.txt`,
        include: true,
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
        path: `${__dirname}/helpers/recursive/file.txt`,
        include: true,
      },
      {
        mime: { contentType: 'text/plain', extension: 'txt' },
        path: `${__dirname}/helpers/recursive/folder/file.txt`,
        include: true,
      },
      {
        mime: { contentType: 'application/javascript', extension: 'js' },
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
        include: true,
      },
      {
        mime: { contentType: 'text/plain', extension: 'txt' },
        path: `${__dirname}/helpers/recursive/folder/thing/file.txt`,
        include: true,
      },
    ]);
  });

  test('it reads a directory and adds file contents', () => {
    expect(
      directory(path.resolve(__dirname, 'helpers/recursive'), {
        recursive: true,
        read: true,
      })
    ).toMatchObject([
      {
        file: '',
        include: true,
        path: `${__dirname}/helpers/recursive/file.txt`,
      },
      {
        file: '',
        include: true,
        path: `${__dirname}/helpers/recursive/folder/file.txt`,
      },
      {
        file: `/** File */\n\nconst thing = 'arbitrary javascript';\n`,
        include: true,
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
      },
      {
        file: '',
        include: true,
        path: `${__dirname}/helpers/recursive/folder/thing/file.txt`,
      },
    ]);
  });

  test('it reads a directory and filters by file extension', () => {
    expect(
      directory(path.resolve(__dirname, 'helpers/recursive'), {
        recursive: true,
        read: true,
        filter: 'js',
      })
    ).toMatchObject([
      {
        file: `/** File */\n\nconst thing = 'arbitrary javascript';\n`,
        include: true,
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
      },
    ]);
  });

  test('it reads a directory and filters by array of file extensions', () => {
    expect(
      directory(path.resolve(__dirname, 'helpers/recursive'), {
        recursive: true,
        read: true,
        filter: ['js'],
      })
    ).toMatchObject([
      {
        file: `/** File */\n\nconst thing = 'arbitrary javascript';\n`,
        include: true,
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
      },
    ]);

    expect(
      directory(path.resolve(__dirname, 'helpers/recursive'), {
        recursive: true,
        read: true,
        filter: ['js', 'txt'],
      })
    ).toMatchObject([
      {
        file: '',
        include: true,
        path: `${__dirname}/helpers/recursive/file.txt`,
      },
      {
        file: '',
        include: true,
        path: `${__dirname}/helpers/recursive/folder/file.txt`,
      },
      {
        file: `/** File */\n\nconst thing = 'arbitrary javascript';\n`,
        include: true,
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
      },
      {
        file: '',
        include: true,
        path: `${__dirname}/helpers/recursive/folder/thing/file.txt`,
      },
    ]);
  });

  test('it reads a directory and filters by malformed file extension', () => {
    const result = [
      {
        file: `/** File */\n\nconst thing = 'arbitrary javascript';\n`,
        include: true,
        path: `${__dirname}/helpers/recursive/folder/otherfile.js`,
      },
    ];

    expect(
      directory(path.resolve(__dirname, 'helpers/recursive'), {
        recursive: true,
        read: true,
        filter: '.js',
      })
    ).toMatchObject(result);

    expect(
      directory(path.resolve(__dirname, 'helpers/recursive'), {
        recursive: true,
        read: true,
        filter: ['.js'],
      })
    ).toMatchObject(result);
  });
});

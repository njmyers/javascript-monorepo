import path from 'path';
import directory from '../directory';
import directoryAsync from '../directory-async';

import {
  SINGLE_FILE_PATH,
  SINGLE_FILE_DATA,
  JS_FILE_DATA,
  SHALLOW_FOLDER_PATH,
  SHALLOW_FOLDER_DATA,
  DEEP_FOLDER_PATH,
  DEEP_FOLDER_DATA,
} from '../__fixtures__/data';

type DirectoryArgs = Parameters<typeof directory>;

describe('src/directory', () => {
  describe('it returns absolute paths with no options argument', () => {
    const args: DirectoryArgs = ['package.json', undefined];
    const expected = [path.resolve('package.json')];

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });

  describe('it recursively reads a directory and returns absolute paths', () => {
    const args: DirectoryArgs = [DEEP_FOLDER_PATH, { recursive: true }];
    const expected = DEEP_FOLDER_DATA.map(fileObject => fileObject.path);

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });

  describe('it shallowly reads a directory and returns an array of paths', () => {
    const args: DirectoryArgs = [SHALLOW_FOLDER_PATH, { recursive: false }];
    const expected = SHALLOW_FOLDER_DATA.map(fileObject => fileObject.path);

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });

  describe('it reads a single file and returns mime information', () => {
    const args: DirectoryArgs = [SINGLE_FILE_PATH, { mime: true }];
    const expected = SINGLE_FILE_DATA.map(fileObject => ({
      path: fileObject.path,
      mime: fileObject.mime,
    }));

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });

  describe('it recursively reads a directory of files and returns mime information', () => {
    const args: DirectoryArgs = [
      DEEP_FOLDER_PATH,
      { mime: true, recursive: true },
    ];
    const expected = DEEP_FOLDER_DATA.map(fileObject => ({
      path: fileObject.path,
      mime: fileObject.mime,
    }));

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });

  describe('it recursively reads a directory of files and returns file contents', () => {
    const args: DirectoryArgs = [
      DEEP_FOLDER_PATH,
      { read: true, recursive: true },
    ];
    const expected = DEEP_FOLDER_DATA.map(fileObject => ({
      path: fileObject.path,
      file: fileObject.file,
    }));

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });

  describe('it reads a directory and filters by file extension', () => {
    const args: DirectoryArgs = [
      DEEP_FOLDER_PATH,
      { recursive: true, filter: 'js' },
    ];
    const expected = JS_FILE_DATA.map(fileObject => ({
      path: fileObject.path,
    }));

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });

  describe('it reads a directory and filters by an array of file extensions', () => {
    const args: DirectoryArgs = [
      DEEP_FOLDER_PATH,
      { recursive: true, filter: ['js', 'txt'] },
    ];
    const expected = DEEP_FOLDER_DATA.map(fileObject => ({
      path: fileObject.path,
    }));

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });

  describe('it reads a directory and filters by malformed file extension', () => {
    const args: DirectoryArgs = [
      DEEP_FOLDER_PATH,
      { recursive: true, filter: '.js' },
    ];
    const expected = JS_FILE_DATA.map(fileObject => ({
      path: fileObject.path,
    }));

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });

  describe('it reads a directory and filters by an array of malformed file extension', () => {
    const args: DirectoryArgs = [
      DEEP_FOLDER_PATH,
      { recursive: true, filter: ['.js'] },
    ];
    const expected = JS_FILE_DATA.map(fileObject => ({
      path: fileObject.path,
    }));

    test('synchronously', () => {
      expect(directory(...args)).toMatchObject(expected);
    });

    test('asynchronously', () => {
      return directoryAsync(...args).then(value =>
        expect(value).toMatchObject(expected)
      );
    });
  });
});

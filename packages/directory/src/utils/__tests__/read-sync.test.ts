import readSync from '../read-sync';
import {
  JS_FILE_PATH,
  JS_FILE_DATA,
  SINGLE_FILE_PATH,
  SINGLE_FILE_DATA,
} from '../../__fixtures__/data';

describe('utils/readSync', () => {
  test('it is a function ', () => {
    expect(typeof readSync).toBe('function');
  });

  const testCases = [
    [
      {
        include: true,
        path: JS_FILE_PATH,
      },
      {
        include: true,
        path: JS_FILE_DATA[0].path,
        file: JS_FILE_DATA[0].file,
      },
    ],
    [
      {
        include: false,
        path: SINGLE_FILE_PATH,
      },
      {
        include: false,
        path: SINGLE_FILE_DATA[0].path,
        file: null,
      },
    ],
  ];

  testCases.forEach(([fileObject, expectedFileObject]) => {
    const { path } = fileObject;
    test(`it reads from the path ${path} and adds the contents to the file key`, () => {
      expect(readSync(fileObject)).toMatchObject(expectedFileObject);
    });
  });
});
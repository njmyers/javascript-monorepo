import readSync from '../read-sync';
import {
  JS_FILE_PATH,
  JS_FILE_DATA,
  SINGLE_FILE_PATH,
  SINGLE_FILE_DATA,
} from '../../__fixtures__/data';

describe('readSync', () => {
  const testCases = [
    [JS_FILE_PATH, JS_FILE_DATA[0].file],
    [SINGLE_FILE_PATH, SINGLE_FILE_DATA[0].file],
  ];

  describe.each(testCases)(
    'when the file path is %s',
    (filePath, fileContents) => {
      test('it returns the file contents', () => {
        expect(readSync(filePath)).toBe(fileContents);
      });
    }
  );
});

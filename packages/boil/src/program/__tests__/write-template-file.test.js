import fs from 'fs';
import writeTemplateFile from '../write-template-file';

describe('program/writeTemplateFile', () => {
  test('it is a function ', () => {
    expect(typeof writeTemplateFile).toBe('function');
  });

  describe('writing the files', () => {
    const filePath = `${process.cwd()}/file.txt`;

    beforeEach(() => {
      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        // swallow
      }
    });

    afterEach(() => {
      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        // swallow
      }
    });

    test('it writes a file', () => {
      writeTemplateFile('file', filePath);
      const file = fs.readFileSync(filePath, { encoding: 'utf8' });
      expect(file).toBe('file');
    });
  });
});

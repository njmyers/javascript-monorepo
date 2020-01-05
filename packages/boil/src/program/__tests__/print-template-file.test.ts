import printTemplateFile from '../print-template-file';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof printTemplateFile).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(() => printTemplateFile({})).not.toThrow();
  });
});

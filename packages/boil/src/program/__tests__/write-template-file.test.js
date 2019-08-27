import writeTemplateFile from '../write-template-file';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof writeTemplateFile()).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(writeTemplateFile()).toMatchSnapshot();
  });
});

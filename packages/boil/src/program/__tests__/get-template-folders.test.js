import getTemplateFolders from '../get-template-folders';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof getTemplateFolders()).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(getTemplateFolders()).toMatchSnapshot();
  });
});

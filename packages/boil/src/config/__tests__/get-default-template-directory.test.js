import getDefaultTemplateDirectory from '../get-default-template-directory';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof getDefaultTemplateDirectory).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(getDefaultTemplateDirectory()).toMatchSnapshot();
  });
});

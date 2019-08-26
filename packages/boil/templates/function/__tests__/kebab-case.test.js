import camelCase from '../kebab-case';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof camelCase()).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(camelCase()).toMatchSnapshot();
  });
});

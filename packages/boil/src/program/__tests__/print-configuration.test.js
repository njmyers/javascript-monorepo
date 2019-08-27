import printConfiguration from '../print-configuration';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof printConfiguration()).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(printConfiguration()).toMatchSnapshot();
  });
});

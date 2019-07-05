import isFunction from '../is-function';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof isFunction).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(isFunction()).toMatchSnapshot();
  });
});

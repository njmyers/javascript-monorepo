import isFileAsync from '../is-file-async';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof isFileAsync).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(isFileAsync()).toMatchSnapshot();
  });
});

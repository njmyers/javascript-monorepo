import isFileSync from '../is-file-sync';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof isFileSync).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(isFileSync()).toMatchSnapshot();
  });
});

import readDirectoryAsync from '../read-directory-async';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof readDirectoryAsync).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(readDirectoryAsync()).toMatchSnapshot();
  });
});

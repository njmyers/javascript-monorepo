import readAsync from '../read-async';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof readAsync).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(readAsync()).toMatchSnapshot();
  });
});

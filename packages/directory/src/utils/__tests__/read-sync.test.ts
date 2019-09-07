import readSync from '../read-sync';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof readSync).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(readSync()).toMatchSnapshot();
  });
});

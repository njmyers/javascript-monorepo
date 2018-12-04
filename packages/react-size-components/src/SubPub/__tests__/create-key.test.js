import createKey from '../create-key';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof createKey).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(createKey()).toMatchSnapshot();
  });
});

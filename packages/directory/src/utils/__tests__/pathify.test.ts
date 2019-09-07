import pathify from '../pathify';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof pathify).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(pathify).toMatchSnapshot();
  });
});

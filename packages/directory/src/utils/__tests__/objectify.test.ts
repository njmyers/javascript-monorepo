import objectify from '../objectify';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof objectify).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(objectify()).toMatchSnapshot();
  });
});

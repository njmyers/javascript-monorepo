import combineOptions from '../combine-options';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof combineOptions).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(combineOptions()).toMatchSnapshot();
  });
});

import combineOptions, { defaults } from '../combine-options';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof combineOptions).toBe('function');
  });

  test('it returns the default options', () => {
    expect(combineOptions()).toMatchObject(defaults);
  });

  test('it merges the options', () => {
    expect(combineOptions({ breakpoint: 760 })).toMatchObject({
      ...defaults,
      breakpoint: 760,
    });
  });
});

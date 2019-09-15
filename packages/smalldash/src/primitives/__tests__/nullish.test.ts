import nullish from '../nullish';

describe('primitives/nullish', () => {
  test('it returns true for null', () => {
    expect(nullish(null)).toBe(true);
  });

  test('it returns true for undefined', () => {
    expect(nullish(undefined)).toBe(true);
  });

  test('it returns false for truthy values', () => {
    expect(nullish({})).toBe(false);
    expect(nullish('string')).toBe(false);
    expect(nullish(10)).toBe(false);
    expect(nullish(['things'])).toBe(false);
    expect(nullish(true)).toBe(false);
  });

  test('it returns false for other falsey values', () => {
    expect(nullish(false)).toBe(false);
    expect(nullish('')).toBe(false);
    expect(nullish(0)).toBe(false);
    expect(nullish(NaN)).toBe(false);
  });
});

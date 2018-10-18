import stringish from '../stringish';

describe('it returns true for non-empty strings', () => {
  test('it returns true for string', () => {
    expect(stringish('string')).toBe(true);
  });

  test('it returns false for empty strings', () => {
    expect(stringish('')).toBe(false);
  });

  test('it returns false for truthy values', () => {
    expect(stringish({})).toBe(false);
    expect(stringish(10)).toBe(false);
    expect(stringish(['things'])).toBe(false);
    expect(stringish(true)).toBe(false);
  });

  test('it returns false for other falsey values', () => {
    expect(stringish(false)).toBe(false);
    expect(stringish(0)).toBe(false);
    expect(stringish(NaN)).toBe(false);
    expect(stringish(null)).toBe(false);
    expect(stringish(undefined)).toBe(false);
  });
});

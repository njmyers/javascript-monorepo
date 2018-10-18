import numberish from '../numberish';

describe('it returns true for real numbers excluding NaN', () => {
  test('it returns true for positive and negative real numbers', () => {
    expect(numberish(2)).toBe(true);
    expect(numberish(-2)).toBe(true);
  });

  test('it returns true for 0 and -0', () => {
    expect(numberish(0)).toBe(true);
    expect(numberish(-0)).toBe(true);
  });

  test('it returns true for positive and negative decimal numbers', () => {
    expect(numberish(2.2)).toBe(true);
    expect(numberish(-2.2)).toBe(true);
  });

  test('it returns true for max numbers', () => {
    expect(numberish(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(numberish(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  test('it returns true for infinities', () => {
    expect(numberish(Number.POSITIVE_INFINITY)).toBe(true);
    expect(numberish(Number.NEGATIVE_INFINITY)).toBe(true);
  });

  test('it returns false for NaN', () => {
    expect(numberish(NaN)).toBe(false);
  });

  test('it returns false for truthy values', () => {
    expect(numberish({})).toBe(false);
    expect(numberish('string')).toBe(false);
    expect(numberish(['things'])).toBe(false);
    expect(numberish(true)).toBe(false);
  });

  test('it returns false for other falsey values', () => {
    expect(numberish('')).toBe(false);
    expect(numberish(false)).toBe(false);
    expect(numberish(null)).toBe(false);
    expect(numberish(undefined)).toBe(false);
  });
});

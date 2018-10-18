import arrayish from '../arrayish';

describe('it returns true for arrays only', () => {
  test('it returns true for arrays', () => {
    expect(arrayish(['value'])).toBe(true);
  });

  test('it returns true for empty arrays', () => {
    expect(arrayish([])).toBe(true);
  });

  test('it returns false for objects', () => {
    expect(arrayish({})).toBe(false);
  });

  test('it returns false for truthy values', () => {
    expect(arrayish('string')).toBe(false);
    expect(arrayish(10)).toBe(false);
    expect(arrayish(true)).toBe(false);
  });

  test('it returns false for other falsey values', () => {
    expect(arrayish(false)).toBe(false);
    expect(arrayish(0)).toBe(false);
    expect(arrayish(NaN)).toBe(false);
    expect(arrayish(null)).toBe(false);
    expect(arrayish(undefined)).toBe(false);
  });
});

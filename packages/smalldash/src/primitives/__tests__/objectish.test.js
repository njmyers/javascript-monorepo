import objectish from '../objectish';

describe('it returns true for objects excluding null, array and function', () => {
  test('it returns true for objects', () => {
    expect(objectish({ key: 'value' })).toBe(true);
  });

  test('it returns true for empty objects', () => {
    expect(objectish({})).toBe(true);
  });

  test('it returns true for objects with no prototype', () => {
    expect(objectish(Object.create(null))).toBe(true);
  });

  test('it returns true for classes', () => {
    class Null {
      constructor(value) {
        return;
      }
    }
    expect(objectish(new Null())).toBe(true);
  });

  test('it returns false for null', () => {
    expect(objectish(null)).toBe(false);
  });

  test('it returns false for functions', () => {
    expect(objectish(() => null)).toBe(false);
    expect(
      objectish(function() {
        return null;
      })
    ).toBe(false);
  });

  test('it returns false for arrays', () => {
    expect(objectish([])).toBe(false);
  });

  test('it returns false for truthy values', () => {
    expect(objectish('string')).toBe(false);
    expect(objectish(10)).toBe(false);
    expect(objectish(true)).toBe(false);
  });

  test('it returns false for other falsey values', () => {
    expect(objectish(false)).toBe(false);
    expect(objectish(0)).toBe(false);
    expect(objectish(NaN)).toBe(false);
    expect(objectish(null)).toBe(false);
    expect(objectish(undefined)).toBe(false);
  });
});

import objectish from '../objectish';

describe('primitives/objectish', () => {
  test('it returns true for objects', () => {
    expect(objectish({ key: 'value' })).toBe(true);
  });

  test('it returns true for empty objects', () => {
    expect(objectish({})).toBe(true);
  });

  test('it returns true for objects with no prototype', () => {
    expect(objectish(Object.create(null))).toBe(true);
  });

  test('it returns true for instantiated classes', () => {
    expect(objectish(new (class {})())).toBe(true);
  });

  test('it returns false for null', () => {
    expect(objectish(null)).toBe(false);
  });

  test('it returns false for arrow functions', () => {
    expect(objectish(() => null)).toBe(false);
  });

  test('it returns false for functions defined with the keyword', () => {
    expect(objectish(function() {})).toBe(false);
  });

  test('it returns false for arrays', () => {
    expect(objectish([])).toBe(false);
  });

  test('it returns false for truthy string values', () => {
    expect(objectish('string')).toBe(false);
  });

  test('it returns false for truthy number values', () => {
    expect(objectish(10)).toBe(false);
  });

  test('it returns false for falsey number values', () => {
    expect(objectish(0)).toBe(false);
  });

  test('it returns false for NaN', () => {
    expect(objectish(NaN)).toBe(false);
  });

  test('it returns false for "true" boolean value', () => {
    expect(objectish(true)).toBe(false);
  });

  test('it returns false for "false" boolean value', () => {
    expect(objectish(false)).toBe(false);
  });

  test('it returns false for null', () => {
    expect(objectish(null)).toBe(false);
  });

  test('it returns false for "undefined"', () => {
    expect(objectish(undefined)).toBe(false);
  });
});

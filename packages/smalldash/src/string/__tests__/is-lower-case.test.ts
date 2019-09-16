import isLowerCase from '../is-lower-case';

test('returns true for lowercase letter', () => {
  expect(isLowerCase('k')).toBe(true);
});

test('returns false for uppercase letter', () => {
  expect(isLowerCase('K')).toBe(false);
});

test('returns false for numerical input', () => {
  expect(isLowerCase('9')).toBe(false);
});

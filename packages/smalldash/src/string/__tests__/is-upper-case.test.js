import isUpperCase from '../is-upper-case';

test('returns true for uppercase letter', () => {
  expect(isUpperCase('K')).toBe(true);
});

test('returns false for lowercase letter', () => {
  expect(isUpperCase('k')).toBe(false);
});

test('returns false for "numerical" input', () => {
  expect(isUpperCase('9')).toBe(false);
});

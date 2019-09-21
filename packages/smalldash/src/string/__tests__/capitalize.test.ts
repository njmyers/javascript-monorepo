import capitalize from '../capitalize';

test('capitalize string', () => {
  const string = 'this is a test';
  const expected = 'This Is A Test';

  expect(capitalize(string)).toBe(expected);
});

test('capitalize string with separator', () => {
  const string = 'this-is-a-test';
  const expected = 'This-Is-A-Test';

  expect(capitalize(string, '-')).toBe(expected);
});

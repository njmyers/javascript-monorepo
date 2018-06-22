import capitalize from '../capitalize';

test('capitalize string', () => {
  const string = 'this is a test';
  const expected = 'This Is A Test';

  expect(capitalize(string)).toBe(expected);
});

test('capitalize string with seperator', () => {
  const string = 'this-is-a-test';
  const expected = 'This-Is-A-Test';

  expect(capitalize(string, '-')).toBe(expected);
});

// test('capitalize string with regex seperator', () => {
// 	const string = 'this/is/a/test';
// 	const expected = 'This/Is/A/Test';
// 	const regex = /\//gi;
// 	console.log(regex instanceof RegExp);
// 	expect(capitalize(string, regex)).toBe(expected);
// });

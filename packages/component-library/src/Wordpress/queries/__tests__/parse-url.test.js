import parseURL from '../parse-url';

test('parse url correctly', () => {
  const url = 'https://some.com/something?query=this';

  expect(parseURL(url)).toMatchObject({ query: 'this' });
});

import makeQuery from '../make-query';

const query = makeQuery({
  per_page: 10,
});

test('add default query parameters and convert to string', () => {
  const string = '?per_page=10&page=1';

  expect(query({ page: 1 })).toBe(string);
});

test('overwrite default query parameters and convert to string', () => {
  const string = '?per_page=100&page=1';

  expect(query({ per_page: 100, page: 1 })).toBe(string);
});

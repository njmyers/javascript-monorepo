import createURL from '../create-url';

const showURL = createURL({ per_page: 10 })('shows');

test('creates a function', () => {
  expect(typeof showURL).toBe('function');
});

test('create urls from different slugs', () => {
  const firstPageOfShows = showURL({
    page: 1,
  });

  expect(firstPageOfShows).toBe('/shows?per_page=10&page=1');
});

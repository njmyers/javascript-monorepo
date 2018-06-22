import addSlug from '../add-slug';

test('add slug and query', () => {
  expect(addSlug('shows')('?query=string')).toBe('/shows?query=string');
});

test('add slug and no query', () => {
  expect(addSlug('shows')()).toBe('/shows');
});

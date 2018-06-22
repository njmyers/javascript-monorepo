import * as library from '../dist/module';

test('library exports correctly', () => {
  expect(library).toHaveProperty('compose');
});

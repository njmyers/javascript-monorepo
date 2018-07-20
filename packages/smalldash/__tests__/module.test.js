import * as library from '../build/smalldash.cjs.js';

test('library exports correctly', () => {
  expect(library).toHaveProperty('compose');
});

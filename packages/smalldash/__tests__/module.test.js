import * as libraryCJS from '../build/smalldash.cjs.js';
import * as libraryESM from '../build/smalldash.esm.js';

test('library exports correctly', () => {
  expect(libraryCJS).toHaveProperty('compose');
  expect(libraryESM).toHaveProperty('compose');
});

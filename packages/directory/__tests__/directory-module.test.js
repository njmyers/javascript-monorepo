import directoryESM from '../build/directory.esm.js';
import directoryCJS from '../build/directory.cjs.js';

describe('the modules are build correctly', () => {
  test('es6 module', () => {
    expect(directoryESM('package.json', { absolute: false })).toMatchObject([
      'package.json',
    ]);
  });

  test('cjs module', () => {
    expect(directoryCJS('package.json', { absolute: false })).toMatchObject([
      'package.json',
    ]);
  });
});

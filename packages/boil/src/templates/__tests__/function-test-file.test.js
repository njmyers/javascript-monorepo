import * as React from 'react';
import functionTestFile from '../function-test-file';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof functionTestFile).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(functionTestFile()).toMatchSnapshot();
  });
});



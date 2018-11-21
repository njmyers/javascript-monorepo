import * as React from 'react';
import functionIndexFile from '../function-index-file';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof functionIndexFile).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(functionIndexFile()).toMatchSnapshot();
  });
});



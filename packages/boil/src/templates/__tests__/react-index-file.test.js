import * as React from 'react';
import reactIndexFile from '../react-index-file';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof reactIndexFile).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(reactIndexFile()).toMatchSnapshot();
  });
});



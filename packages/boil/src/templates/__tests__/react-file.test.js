import * as React from 'react';
import reactFile from '../react-file';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof reactFile).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(reactFile()).toMatchSnapshot();
  });
});



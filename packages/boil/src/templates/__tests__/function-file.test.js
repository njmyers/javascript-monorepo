import * as React from 'react';
import functionFile from '../function-file';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof functionFile).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(functionFile()).toMatchSnapshot();
  });
});



import * as React from 'react';
import reactTypesFile from '../react-types-file';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof reactTypesFile).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(reactTypesFile()).toMatchSnapshot();
  });
});



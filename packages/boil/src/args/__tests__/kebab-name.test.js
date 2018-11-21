import * as React from 'react';
import kebabName from '../kebab-name';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof kebabName).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(kebabName()).toMatchSnapshot();
  });
});



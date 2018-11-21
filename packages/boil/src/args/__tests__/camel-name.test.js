import * as React from 'react';
import camelName from '../camel-name';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof camelName).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(camelName()).toMatchSnapshot();
  });
});



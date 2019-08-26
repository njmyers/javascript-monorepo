import React from 'react';
import TestRenderer from 'react-test-renderer';
import PascalCase from '../PascalCase';

describe('it works', () => {
  test('it loads without crashing', () => {
    const render = TestRenderer.create(<PascalCase />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});

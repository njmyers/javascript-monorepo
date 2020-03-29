import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../Button';

describe('it works', () => {
  test('it loads without crashing', () => {
    const render = TestRenderer.create(<Button />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});

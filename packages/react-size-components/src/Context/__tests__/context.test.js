import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Context from '../Context';

describe('it works', () => {
  test('it loads without crashing', () => {
    const render = TestRenderer.create(<Context />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});

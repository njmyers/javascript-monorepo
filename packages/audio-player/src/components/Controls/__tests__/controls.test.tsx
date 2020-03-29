import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Controls from '../Controls';

describe('it works', () => {
  test('it loads without crashing', () => {
    const render = TestRenderer.create(<Controls />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});

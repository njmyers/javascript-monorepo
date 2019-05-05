import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Submit from '../Submit';

describe('it works', () => {
  test('it loads without crashing', () => {
    const render = TestRenderer.create(<Submit />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});

import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import TextArea from '../TextArea';

describe('it works', () => {
  test('it loads without crashing', () => {
    const render = TestRenderer.create(<TextArea />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});

/** @flow */
import { componentName } from "../args";

const reactTestFile = kebab => `import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import ${componentName(kebab)} from '../${componentName(kebab)}';

describe('it works', () => {
  test('it loads without crashing', () => {
    const render = TestRenderer.create(<${componentName(kebab)} />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});

`;

export default reactTestFile;

/** @flow */
import { componentName, camelName } from "../args";

const reactStoryFile = kebab => `/** @flow */
import * as React from 'react';
import { storiesOf } from '@storybook/react'

import ${componentName(kebab)} from '../${componentName(kebab)}'

storiesOf('${componentName(kebab)}', module)
  .add('Demo', () => <${componentName(kebab)} />)
`;

export default reactStoryFile;

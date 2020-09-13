import * as React from 'react';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import Advanced from './Advanced';

export default {
  title: 'react-size-components/3) Window',
  decorators: [withDocs(readme)],
};

export const CustomConfiguration = () => <Child />;
export const ComponentCustomConfiguration = () => <Advanced />;

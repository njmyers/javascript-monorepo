import React, { Fragment } from 'react';

import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';

export default {
  title: 'react-size-components/3) Window',
  decorators: [withDocs(readme)],
};

export const BasicWindowSize = () => <Child />;

import React from 'react';

import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import MultipleChildren from './MultipleChildren';

export default {
  title: 'react-size-components/2) Component',
  decorators: [withDocs(readme)],
};

export const SinglePositionComponent = () => <Child />;

export const ListOfPositionAwareComponents = () => <MultipleChildren />;

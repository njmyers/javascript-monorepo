import React, { Fragment } from 'react';

import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Parent from './Parent';

export default {
  title: 'react-size-components/4) Performance',
  decorators: [withDocs(readme)],
};

export const ManySize = () => <Parent />;

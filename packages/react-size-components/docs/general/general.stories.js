import React from 'react';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import General from './General';

export default {
  title: 'react-size-components/1) General',
  decorators: [withDocs(readme)],
};

export const Welcome = () => <General />;

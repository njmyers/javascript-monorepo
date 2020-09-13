import * as React from 'react';
import YouTubeBasic from './YouTubeBasic';
import { YouTube } from '../YouTube';
import { withDocs } from 'storybook-readme';

import readme from './README.md';

export default {
  title: 'react-you-tube/README',
  decorators: [withDocs(readme)],
};

export const Example = () => null;

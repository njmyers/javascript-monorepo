import * as React from 'react';
import YouTubeBasic from './YouTubeBasic';
import { YouTube } from '../YouTube';
import { withDocs } from 'storybook-readme';

import readme from './YouTubeBasic.md';

export default {
  title: 'react-you-tube/YouTubeBasic',
  decorators: [withDocs(readme)],
};

export const Example = () => <YouTubeBasic />;

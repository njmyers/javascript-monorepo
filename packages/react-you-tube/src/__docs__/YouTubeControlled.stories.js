import * as React from 'react';
import YouTubeControlled from './YouTubeControlled';
import { YouTube } from '../YouTube';
import { withDocs } from 'storybook-readme';

import readme from './YouTubeControlled.md';

export default {
  title: 'react-you-tube/YouTubeControlled',
  decorators: [withDocs(readme)],
};

export const Example = () => <YouTubeControlled />;

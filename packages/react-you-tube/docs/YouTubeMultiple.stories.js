import * as React from 'react';
import YouTubeMultiple from './YouTubeMultiple';
import { withDocs } from 'storybook-readme';

import readme from './YouTubeMultiple.md';

export default {
  title: 'react-you-tube/YouTubeMultiple',
  decorators: [withDocs(readme)],
};

export const Example = () => <YouTubeMultiple />;

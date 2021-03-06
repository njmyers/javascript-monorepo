import * as React from 'react';
import YouTubeHook from './YouTubeHook';
import { withDocs } from 'storybook-readme';

import readme from './YouTubeHook.md';

export default {
  title: 'react-you-tube/YouTubeHook',
  decorators: [withDocs(readme)],
};

export const Example = () => <YouTubeHook />;

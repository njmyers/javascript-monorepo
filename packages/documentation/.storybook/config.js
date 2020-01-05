import path from 'path';
import * as storybook from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { withLayout } from './decorators';

export const NODE_MODULES = path.resolve(__dirname, '../node_modules');
export const PACKAGES = path.resolve(__dirname, '../../../', 'packages');

storybook.addParameters({
  options: {
    isFullScreen: false,
    showPanel: true,
    panelPosition: 'bottom',
    hierarchyRootSeperator: /\|/,
    hierarchySeparator: /\|/,
    theme: {
      brandTitle: '@njmyers NPM Documentation',
      brandUrl: 'https://njmyers.netlify.com',
    },
  },
});

storybook.addDecorator(withKnobs);
storybook.addDecorator(withLayout);

// automatically import all files ending in *.stories.js
storybook.configure(
  require.context('../../react-you-tube', true, /.stories.(j|t)sx?$/),
  module
);

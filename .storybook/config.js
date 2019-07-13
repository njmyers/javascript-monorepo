import * as React from 'react';
import * as storybook from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';
// components
import Layout from './Layout';

// Add Global Knobs
storybook.addDecorator(withKnobs);

storybook.addParameters({
  options: {
    isFullScreen: false,
    showPanel: true,
    panelPosition: 'bottom',
    hierarchyRootSeperator: /\|/,
    hierarchySeparator: /\|/,
    // showSearchBox: false,
    // addonPanelInRight: true,
    // sortStoriesByKind: true,
    theme: {
      brandTitle: '@njmyers NPM Documentation',
      brandUrl: 'https://njmyers.netlify.com',
    },
  },
});

storybook.addDecorator((stories, context) => {
  return <Layout>{stories()}</Layout>;
});

// automatically import all files ending in *.stories.js
const req = require.context(
  '../packages',
  true,
  /^((?![\\/]node_modules|vendor[\\/]).)*\.stories.(j|t)s$/
);

// webpack voodoo
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

// initialize storybook
storybook.configure(loadStories, module);

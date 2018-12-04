import * as React from 'react';
import * as storybook from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';
// components
import Layout from './Layout';

// Add Global Knobs
storybook.addDecorator(withKnobs);

withOptions({
  name: '@njmyers NPM Documentation',
  url: 'https://njmyers.netlify.com',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true,
});

storybook.addDecorator((stories, context) => {
  return <Layout>{stories()}</Layout>;
});

// automatically import all files ending in *.stories.js
const req = require.context(
  '../packages',
  true,
  /^((?![\\/]node_modules|vendor[\\/]).)*\.stories.js$/
);

// webpack voodoo
const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

// initialize storybook
storybook.configure(loadStories, module);

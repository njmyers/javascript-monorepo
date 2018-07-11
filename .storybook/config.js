import * as React from 'react';
import * as storybook from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
import docs from 'storybook-addon-docgen';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';
// components
import Layout from './Layout';
// styles
import 'normalize.css';

// Add Global Knobs
storybook.addDecorator(withKnobs);

setOptions({
  name: 'React Component Library',
  url: 'https://njmyers.github.io/component-library',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
});

storybook.addDecorator((stories, context) => {
  return <Layout>{stories()}</Layout>;
});

// automatically import all files ending in *.stories.js
const req = require.context(
  '../packages/component-library/src',
  true,
  /.stories.js$/
);

// webpack voodoo
const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

// initialize storybook
storybook.configure(loadStories, module);

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import { camelToKebab } from 'smalldash';
import * as examples from '../__docs__';

Object.entries(examples).forEach(([name, Component]) => {
  const folderName = `./__docs__/${camelToKebab(name).slice(1)}`;

  // const source = require(`${folderName}/example-source.txt`).default;
  // const { default: readme } = require(`${folderName}/README.md`);

  storiesOf('@njmyers/accessibility-props|Components', module)
    // .addDecorator(withStorySource(source))
    .add(name, () => React.createElement(Component));
});

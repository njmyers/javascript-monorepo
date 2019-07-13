import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import { camelToTitle } from 'smalldash';
import * as examples from '../__docs__';

Object.entries(examples).forEach(([moduleName, Component]) => {
  const name = camelToTitle(moduleName).replace('You Tube', 'YouTube');
  const source = require(`../__docs__/${moduleName}.txt`).default;

  storiesOf('@njmyers/react-youtube|Demo', module)
    .addDecorator(withStorySource(source))
    .add(name, () => React.createElement(Component));
});

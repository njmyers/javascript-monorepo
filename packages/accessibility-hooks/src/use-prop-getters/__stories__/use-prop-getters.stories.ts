import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import { withDocs } from 'storybook-readme';
import { camelToTitle } from 'smalldash';
import * as examples from '../__docs__';

function appendSourceToDocs(docs, source) {
  return docs + '\n\n\n```js\n' + source + '\n```\n';
}

Object.entries(examples).forEach(([moduleName, Component]) => {
  const name = camelToTitle(moduleName);
  const source = require(`../__docs__/${moduleName}.txt`).default;
  const docs = require(`../__docs__/${moduleName}.md`).default;

  storiesOf('@njmyers/accessibility-props|Hooks', module)
    .addDecorator(withStorySource(source))
    .addDecorator(withDocs(appendSourceToDocs(docs, source)))
    .add(name, () => React.createElement(Component));
});

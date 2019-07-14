import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import { withDocs } from 'storybook-readme';
import { camelToTitle } from 'smalldash';

import readme from '../__docs__/README.md';
import * as examples from '../__docs__';

function appendSourceToDocs(docs, source) {
  return docs + '\n\n\n```js\n' + source + '\n```\n';
}

storiesOf('@njmyers/react-you-tube|Intro', module)
  .addDecorator(withDocs(readme))
  .add('README', () => (
    <p className="sans">Welcome to the interactive playground!</p>
  ));

Object.entries(examples).forEach(([moduleName, Component]) => {
  const name = camelToTitle(moduleName).replace('You Tube', 'YouTube');
  const source = require(`../__docs__/${moduleName}.txt`).default;
  const docs = require(`../__docs__/${moduleName}.md`).default;

  storiesOf('@njmyers/react-you-tube|Examples', module)
    .addDecorator(withStorySource(source))
    .addDecorator(withDocs(appendSourceToDocs(docs, source)))
    .add(name, () => React.createElement(Component));
});

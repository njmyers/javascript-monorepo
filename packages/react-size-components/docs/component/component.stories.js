import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../with-docs';

import readme from './README.md';
import Child from './Child';
import Parent from './Parent';
import ID from './ID';
import Debounce from './Debounce';

storiesOf('2) Component Size', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withDocs(readme))
  .add('component size', () => <Child />)
  .add('component size with parent callback', () => (
    <Parent onSize={action('component size callback')} />
  ))
  .add('inject id into callback', () => (
    <ID onSize={action('component size callback')} />
  ))
  .add('debounce callbacks', () => (
    <Debounce onSize={action('component size callback')} />
  ));

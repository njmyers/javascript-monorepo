import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import Parent from './Parent';
import ID from './ID';
import Debounce from './Debounce';

storiesOf('react-size-components/2) Component', module)
  .addDecorator(withDocs(readme))
  .add('Basic Component', () => <Child />)
  .add('Parent Callback', () => (
    <Parent onSize={action('component size callback')} />
  ))
  .add('Inject ID into Callback', () => (
    <ID onSize={action('component size callback')} />
  ))
  .add('Debounce Callback', () => (
    <Debounce onSize={action('component size callback')} />
  ));

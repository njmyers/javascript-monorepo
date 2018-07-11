import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import Parent from './Parent';
import ID from './ID';

storiesOf('3) Window Size', module)
  .addDecorator(withDocs(readme))
  .add('window size', () => <Child />)
  .add('window size with parent callback', () => (
    <Parent onSize={action('window size callback')} />
  ));

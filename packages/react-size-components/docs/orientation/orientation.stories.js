import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import Parent from './Parent';

storiesOf('Size Components/5) Orientation Flag', module)
  .addDecorator(withDocs(readme))
  .add('child with orientation flag', () => <Child />)
  .add('child with orientation flag and parent callback', () => (
    <Parent onSize={action('orientation flag callback')} />
  ));

import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import Parent from './Parent';
import Advanced from './Advanced';

storiesOf('7) Custom Flags', module)
  .addDecorator(withDocs(readme))
  .add('custom flags and props', () => <Child />)
  .add('custom flags and props with onSize callback', () => (
    <Parent onSize={action('custom flag callback')} />
  ))
  .add('advanced custom flags and subscriptions', () => <Advanced />);

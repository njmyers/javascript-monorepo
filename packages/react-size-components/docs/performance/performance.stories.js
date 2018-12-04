import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Parent from './Parent';
import SlowParent from './SlowParent';
import Test from './Test';

storiesOf('react-size-components/4) Performance', module)
  .addDecorator(withDocs(readme))
  .add('many size aware components made with size', () => (
    <Parent timeStamp={action('timestamp since for render cycle')} />
  ));
// .add('lots of size aware components manually with event listeners', () => (
//   <SlowParent timeStamp={action('timestamp since for render cycle')} />
// ));

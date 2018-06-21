import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../with-docs';

import readme from './README.md';
import Child, { Breakpoint } from './Child';
import Parent from './Parent';

storiesOf('4) Mobile Flag', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withDocs(readme))
  .add('mobile flag', () => <Child />)
  .add('mobile flag and alternate breakpoint', () => <Breakpoint />)
  .add('mobile flag with parent callback', () => (
    <Parent onSize={action('mobile flag callback')} />
  ));

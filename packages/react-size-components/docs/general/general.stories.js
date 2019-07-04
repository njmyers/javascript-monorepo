import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import General from './General';

storiesOf('react-size-components|1) General', module)
  .addDecorator(withDocs(readme))
  .add('Welcome', () => <General />);

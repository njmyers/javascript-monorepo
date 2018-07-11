import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import General from './General';

storiesOf('1) Module Infomation', module)
  .addDecorator(withDocs(readme))
  .add('welcome', () => <General />);

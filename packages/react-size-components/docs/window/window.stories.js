import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';

storiesOf('react-size-components|3) Window', module)
  .addDecorator(withDocs(readme))
  .add('Basic Window Size', () => <Child />);

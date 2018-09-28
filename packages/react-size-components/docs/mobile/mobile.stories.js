import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child, { Breakpoint } from './Child';

storiesOf('react-size-components/3) Window', module)
  .addDecorator(withDocs(readme))
  .add('Mobile Flag', () => <Child />)
  .add('Mobile Flag w/ Alternate Breakpoint', () => <Breakpoint />);

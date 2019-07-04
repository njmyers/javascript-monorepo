import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';

storiesOf('react-size-components|3) Window', module)
  .addDecorator(withDocs(readme))
  .add('Orientation', () => <Child />);

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import Advanced from './Advanced';

storiesOf('react-size-components|3) Window', module)
  .addDecorator(withDocs(readme))
  .add('Custom Configuration', () => <Child />);

storiesOf('react-size-components|2) Component', module)
  .addDecorator(withDocs(readme))
  .add('Custom Configuration', () => <Advanced />);

import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import MultipleChildren from './MultipleChildren';

storiesOf('react-size-components/2) Component', module)
  .addDecorator(withDocs(readme))
  .add('Single Position Component', () => <Child />)
  .add('List of Position Aware Components', () => (
    <MultipleChildren
      action={action('this component just changed in view state')}
    />
  ));

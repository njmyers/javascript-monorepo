import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import MultipleChildren from './MultipleChildren';

storiesOf('Size Components/6) Position Aware', module)
  .addDecorator(withDocs(readme))
  .add('single position aware child', () => <Child />)
  .add('list of position aware children', () => (
    <MultipleChildren
      action={action('this component just changed in view state')}
    />
  ));

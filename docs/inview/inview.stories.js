import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../with-docs';

import readme from './README.md';
import Child from './Child';
import MultipleChildren from './MultipleChildren';

storiesOf('6) Position Aware', module)
    .addDecorator(withReadme(readme))
    .addDecorator(withDocs(readme))
    .add('single position aware child', () => <Child />)
    .add('list of position aware children', () => (
        <MultipleChildren action={action('this component just changed in view state')} />
    ));

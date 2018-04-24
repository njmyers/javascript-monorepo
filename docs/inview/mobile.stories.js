import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../with-docs';

import readme from './README.md';
import Child from './Child';
// import Parent from './Parent';

storiesOf('7) In View', module)
    .addDecorator(withReadme(readme))
    .addDecorator(withDocs(readme))
    .add('child with inView flag', () => <Child />);

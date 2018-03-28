import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../with-docs';

import readme from './README.md';
import Child, { Breakpoint } from './Child';
import Parent from './Parent';

storiesOf('4) Mobile Detection', module)
    .addDecorator(withReadme(readme))
    .addDecorator(withDocs(readme))
    .add('child with mobile flag', () => <Child />)
    .add('child with mobile flag and alternate breakpoint', () => <Breakpoint />)
    .add('child mobile flag and parent callback', () => (
        <Parent onSize={action('mobile flag callback')} />
    ));

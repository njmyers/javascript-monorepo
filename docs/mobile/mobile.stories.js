import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import mobile from './mobile.md';
import Child, { Breakpoint } from './Child';
import Parent from './Parent';

storiesOf('4) Mobile Detection', module)
    .addDecorator(withReadme(mobile))
    .addDecorator(withDocs(mobile))
    .add('child with mobile flag', () => <Child />)
    .add('child with mobile flag and alternate breakpoint', () => <Breakpoint />)
    .add('child mobile flag and parent callback', () => (
        <Parent onSize={action('mobile flag callback')} />
    ));

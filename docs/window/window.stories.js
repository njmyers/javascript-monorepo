import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import windowReadme from './window.md';
import Child from './Child';
import Parent from './Parent';
import ID from './ID';

storiesOf('3) Basic Window Size', module)
    .addDecorator(withReadme(windowReadme))
    .addDecorator(withDocs(windowReadme))
    .add('child window size', () => <Child />)
    .add('child window size with parent callback', () => (
        <Parent onSize={action('window size callback')} />
    ))
    .add('inject id into child callback window size', () => (
        <ID onSize={action('window size callback')} />
    ));

import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import general from './general.md';
// import Child from './Child';
// import Parent from './Parent';
// import ID from './ID';

storiesOf('1) Module Infomation', module)
    .addDecorator(withReadme(general))
    .addDecorator(withDocs(general))
    .add('welcome', () => (
        <Fragment>
            <h1>Welcome to the Interactive Demo</h1>
        </Fragment>
    ))
    .add('how to use', () => (
        <Fragment>
            <p>The chosen component will be here in this dashed box.</p>
            <p>The docs will be below or to the right.</p>
            <p>Monitor callbacks in the action logger to the right.</p>
        </Fragment>
    ));
// .add('child component size', () => <Child />)
// .add('child component size with parent callback', () => (
//     <Parent onSize={action('component size callback')} />
// ))
// .add('inject id into child callback', () => <ID onSize={action('component size callback')} />);

import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withReadme, withDocs } from 'storybook-readme';

import readme from '../README.md';

// import 'primer/build/build.css';
// import './stories.css';

import {
    MySizeIs,
    MyWindowIs,
    AmIMobile,
    WhatIsMyOrientation,
    ScrollListener,
    ResizeListener,
    MasterMeasure,
} from './Demo';

storiesOf('README', module)
    .addDecorator(withReadme(readme))
    .add('GitHub', () => {
        return <div dangerouslySetInnerHTML={{ __html: readme }} />;
    });

storiesOf.('Basic Component Size', module)
    .addDecorator()

storiesOf('Child Demos', module)
    .addDecorator(withReadme(readme))
    // .addDecorator(withDocs(readme))
    .add('introduction', () => (
        <p>
            These examples cover basic usage where the child component accesses size information
            through it's own props.sizes
        </p>
    ))
    .add('basic component size', () => <MySizeIs />)
    .add('basic window size', () => <MyWindowIs />)
    .add('basic mobile detection', () => <AmIMobile />)
    .add('basic orientation detection', () => <WhatIsMyOrientation />)
    .add('measure multiple ', () => <MasterMeasure />)
    .add('subscribe to provided scroll listener', () => <ScrollListener />)
    .add('subscribe to provided resize listener', () => <ResizeListener />);

storiesOf('Parent Demos', module)
    .add('introduction', () => (
        <p>
            These examples cover basic usage where the parent component passes onSize callback to
            access the size information contained in the child component.
            <a href="https://reactjs.org/docs/lifting-state-up.html">Lifting State Up</a>
        </p>
    ))
    .add(
        'basic component size',
        withInfo('info')(() => <MySizeIs onSize={action('component size callback')} />)
    )
    .add('adding an id to the callback', () => (
        <MySizeIs onSize={action('adding an id to callback')} id="basic-size-component" />
    ))
    .add('basic window size', () => <MyWindowIs onSize={action('window size callback')} />)
    .add('basic mobile detection', () => <AmIMobile onSize={action('mobile detection callback')} />)
    .add('basic orientation detection', () => (
        <WhatIsMyOrientation onSize={action('orientation callback')} />
    ))
    .add('measure multiple properties', () => (
        <MasterMeasure onSize={action('multiple properties callback')} />
    ));

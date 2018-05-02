import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../with-docs';

import readme from './README.md';
import Parent from './Parent';
import SlowParent from './SlowParent';
import Test from './Test';

storiesOf('8) Performance', module)
    .addDecorator(withReadme(readme))
    .addDecorator(withDocs(readme))
    .add('lots of size aware components made with size', () => (
        <Parent timeStamp={action('timestamp since for render cycle')} />
    ))
    .add('lots of size aware components manually with event listeners', () => (
        <SlowParent timeStamp={action('timestamp since for render cycle')} />
    ));

import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import component from './component.md';
import Child from './Child';
import Parent from './Parent';
import ID from './ID';

storiesOf('2) Basic Component Size', module)
    .addDecorator(withReadme(component))
    .addDecorator(withDocs(component))
    .add('child component size', () => <Child />)
    .add('child component size with parent callback', () => (
        <Parent onSize={action('component size callback')} />
    ))
    .add('inject id into child callback', () => <ID onSize={action('component size callback')} />);

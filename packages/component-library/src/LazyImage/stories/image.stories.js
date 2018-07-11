import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Changer from './Changer';

import src from './stock.jpg';
import placeholder from './stock-small.jpg';

import readme from '../README.md';

import './image.sass';

import LazyImage from '../LazyImage';

storiesOf('5) LazyImage', module)
  .addDecorator(withDocs(readme))
  .add('Simple Demo', () => (
    <div style={{ width: '300px' }}>
      <LazyImage src={src} placeholder={placeholder} />
    </div>
  ))

  .add('Add Class Name', () => (
    <div style={{ width: '300px' }}>
      <LazyImage className="imageClass" src={src} placeholder={placeholder} />
    </div>
  ))

  .add('Trigger Reload When src changes', () => (
    <div style={{ width: '300px' }}>
      <Changer />
    </div>
  ));

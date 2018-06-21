import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../with-docs';

// import readme from './README.md';

import 'normalize.css';
import './image.sass';

import LazyImage from '../../src/LazyImage';

const src =
  'https://jlwoodwindrepair.imgix.net/2018/06/coss.jpg?fit=crop&fm=pjpg&h=650&ixlib=php-1.1.0&rect=0%2C48%2C2400%2C963&w=1620&wpsize=testimonial-crop';

const placeholder =
  'https://jlwoodwindrepair.imgix.net/2018/06/coss.jpg?fit=crop&fm=pjpg&h=65&ixlib=php-1.1.0&rect=0%2C48%2C2400%2C963&w=162&wpsize=testimonial-crop&blur=100';

storiesOf('5) LazyImage', module)
  .add('Demo', () => (
    <Fragment>
      <LazyImage src={src} placeholder={placeholder} />
    </Fragment>
  ))

  .add('Add Class Name', () => (
    <Fragment>
      <LazyImage className="imageClass" src={src} placeholder={placeholder} />
    </Fragment>
  ));

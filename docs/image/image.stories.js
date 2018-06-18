import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../with-docs';

// import readme from './README.md';

import 'normalize.css';

import LazyImage from '../../src/LazyImage';

const src =
  'https://artetexture.s3.amazonaws.com/2018/06/SEA_Board_L-600x450.jpg';

const placeholder =
  'https://artetexture.s3.amazonaws.com/2018/06/SEA_Board_L-30x23.jpg';

storiesOf('5) LazyImage', module).add('Demo', () => (
  <Fragment>
    <div style={{ width: '500px' }}>
      <LazyImage src={src} placeholder={placeholder} ratio={4 / 3} />
    </div>
    <div style={{ width: '500px' }}>
      <LazyImage src={src} placeholder={placeholder} ratio={4 / 3} />
    </div>
    <div style={{ width: '500px' }}>
      <LazyImage src={src} placeholder={placeholder} ratio={4 / 3} />
    </div>
    <div style={{ width: '500px' }}>
      <LazyImage src={src} placeholder={placeholder} ratio={4 / 3} />
    </div>
    <div style={{ width: '500px' }}>
      <LazyImage src={src} placeholder={placeholder} ratio={4 / 3} />
    </div>
    <div style={{ width: '500px' }}>
      <LazyImage src={src} placeholder={placeholder} ratio={4 / 3} />
    </div>
  </Fragment>
));

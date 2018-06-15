import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../with-docs';

// import readme from './README.md';

import 'normalize.css';

import Image from '../../src/Image';

const placeholder =
  'https://s3.amazonaws.com/api.jlwoodwindrepair.com/2018/05/IMG_1540-150x150.jpg';

const src =
  'https://s3.amazonaws.com/api.jlwoodwindrepair.com/2018/05/IMG_1540-1024x683.jpg';

storiesOf('5) Image', module).add('Demo', () => (
  <Image src={src} placeholder={placeholder} />
));

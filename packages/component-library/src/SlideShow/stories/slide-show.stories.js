import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import SlideShow from '../SlideShow';

storiesOf('SlideShow', module).add('Simple Text Slideshow', () => (
  <div>
    <SlideShow>
      <p>slide one</p>
      <p>slide two</p>
      <p>slide three</p>
      <p>slide four</p>
      <p>slide five</p>
    </SlideShow>
  </div>
));

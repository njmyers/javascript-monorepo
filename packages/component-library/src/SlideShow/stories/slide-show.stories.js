import React, { Fragment } from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { text, boolean, number, object } from '@storybook/addon-knobs/react';
import { withDocs, withReadme } from 'storybook-readme';

import SlideShow from '../SlideShow';
import readme from '../README.md';

import one from './images/one.jpg';
import two from './images/two.jpg';
import three from './images/three.jpg';
import four from './images/four.jpg';
import five from './images/five.jpg';

const {
  frameRate,
  play,
  className,
  onState,
  offState,
  style,
  transitionSpeed,
  transitionTiming,
} = SlideShow.defaultProps;

storiesOf('Component Library/7) SlideShow', module)
  .addDecorator(withDocs(readme))
  // .addDecorator(withReadme(readme))
  .add('Simple Text Slideshow', () => (
    <SlideShow
      frameRate={number('frameRate', frameRate, { step: 100 })}
      play={boolean('play', play)}
      className={text('className', className)}
      onState={object('onState', onState)}
      offState={object('offState', offState)}
      style={object('style', style)}
      transitionSpeed={number('transitionSpeed', transitionSpeed)}
      transitionTiming={text('transitionTiming', transitionTiming)}
    >
      <p>slide one</p>
      <p>slide two</p>
      <p>slide three</p>
      <p>slide four</p>
      <p>slide five</p>
    </SlideShow>
  ))
  .add('Random Image Slideshow', () => (
    <div style={{ height: '300px' }}>
      <SlideShow
        frameRate={number('frameRate', frameRate, { step: 100 })}
        play={boolean('play', play)}
        className={text('className', className)}
        onState={object('onState', onState)}
        offState={object('offState', offState)}
        style={object('style', style)}
        transitionSpeed={number('transitionSpeed', transitionSpeed)}
        transitionTiming={text('transitionTiming', transitionTiming)}
      >
        <img src={one} style={{ width: '400px', height: '300px' }} />
        <img src={two} style={{ width: '400px', height: '300px' }} />
        <img src={three} style={{ width: '400px', height: '300px' }} />
        <img src={four} style={{ width: '400px', height: '300px' }} />
        <img src={five} style={{ width: '400px', height: '300px' }} />
      </SlideShow>
    </div>
  ));

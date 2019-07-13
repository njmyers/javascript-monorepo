import * as React from 'react';
import { storiesOf } from '@storybook/react';
import YouTube from '../YouTube';

storiesOf('@njmyers/react-youtube|Demo', module).add('Player', () => (
  <YouTube
    width="640"
    height="390"
    videoId="Z1BCujX3pw8"
    playerVars={{ autoplay: 0, color: 0, controls: 1 }}
  />
));

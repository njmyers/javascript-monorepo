import * as React from 'react';
// components
import AudioCore from '../AudioCore';
import Controls from '../Controls';
import TrackInfo from '../TrackInfo';
import Meter from '../Meter';
import Volume from '../Volume';
// types
import { Props } from './types';

const AudioPlayer: React.FC<Props> = ({ display, classPrefix, ...props }) => {
  return (
    <AudioCore classPrefix={classPrefix} {...props}>
      {display.includes('controls') && <Controls />}
      {display.includes('trackInfo') && <TrackInfo />}
      {display.includes('meter') && <Meter />}
      {display.includes('volume') && <Volume />}
    </AudioCore>
  );
};

AudioPlayer.defaultProps = {
  display: ['controls', 'trackInfo', 'meter', 'volume'],
  classPrefix: 'audioPlayer',
};

export default AudioPlayer;

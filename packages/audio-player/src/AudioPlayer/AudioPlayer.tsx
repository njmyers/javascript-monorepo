import React from 'react';
// components
import AudioCore from '../AudioCore';
import Controls from '../Controls';
import TrackInfo from '../TrackInfo';
import Meter from '../Meter';
import Volume from '../Volume';
// types
import { Props } from './types';

function AudioPlayer({ display, classPrefix, ...props }: Props) {
  return (
    <AudioCore classPrefix={classPrefix} {...props}>
      {display.includes('controls') && <Controls {...props} />}
      {display.includes('trackInfo') && <TrackInfo {...props} />}
      {display.includes('meter') && <Meter {...props} />}
      {display.includes('volume') && <Volume {...props} />}
    </AudioCore>
  );
}

AudioPlayer.defaultProps = {
  display: ['controls', 'trackInfo', 'meter', 'volume'],
  classPrefix: 'audioPlayer',
};

export default AudioPlayer;

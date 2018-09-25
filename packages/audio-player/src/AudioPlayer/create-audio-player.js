import * as React from 'react';
import uuid from 'uuid/v1';
import createAudioCore from '../AudioCore';
import createControls from '../Controls';
import createTrackInfo from '../TrackInfo';
import createMeter from '../Meter';
import createVolume from '../Volume';

import createProvider, { withPlayer as _withPlayer } from '../Provider';

const createAudioPlayer = (storeKey = uuid()) => {
  const Provider = createProvider(storeKey);
  const AudioCore = createAudioCore(storeKey);
  const Controls = createControls(storeKey);
  const TrackInfo = createTrackInfo(storeKey);
  const Meter = createMeter(storeKey);
  const Volume = createVolume(storeKey);

  const withPlayer = _withPlayer(storeKey, Provider);

  const AudioPlayer = (props) => (
    <Provider>
      <AudioCore classPrefix={props.className}>
        {props.controls && <Controls />}
        {props.trackInfo && <TrackInfo />}
        {props.meter && <Meter />}
        {props.volume && <Volume />}
      </AudioCore>
    </Provider>
  );

  AudioPlayer.defaultProps = {
    controls: true,
    trackInfo: true,
    meter: true,
    volume: true,
    className: 'audioPlayer',
  };

  return {
    AudioPlayer,
    withPlayer,
  };
};

export default createAudioPlayer;

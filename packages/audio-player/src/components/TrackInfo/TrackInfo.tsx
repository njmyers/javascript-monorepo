import * as React from 'react';

import Marquee from '../Marquee';
import * as utils from './utils';
import { usePlayer } from '../Context';

import './track-info.sass';

const TrackInfo: React.FC = () => {
  const { state } = usePlayer();
  const { currentTime, duration, playing, current, tracks } = state;
  const currentTrack = tracks[current];
  const text = utils.formatTrackText(currentTrack);

  return (
    <div className="trackInfo">
      <Marquee
        speed={utils.convertStringToMarqueeSpeed(text)}
        text={text}
        state={playing ? 'running' : 'paused'}
        lineHeight="12px"
      />
      <p className="trackTimes">
        {utils.formatTime(currentTime)} | {utils.formatTime(duration)}
      </p>
    </div>
  );
};

export default TrackInfo;

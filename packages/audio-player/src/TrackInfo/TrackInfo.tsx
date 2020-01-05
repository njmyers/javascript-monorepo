// @ts-nocheck
import * as React from 'react';
// components
import Marquee from '../Marquee';
import {
  formatTrackText,
  formatTime,
  convertStringToMarqueeSpeed,
} from './utils';
// sass
import './track-info.sass';

const TrackInfo = ({ state }) => {
  const { currentTime, duration, playing, current, tracks } = state;
  const currentTrack = tracks[current];
  const text = formatTrackText(currentTrack);

  return (
    // !sizes.mobile && (
    <div className="trackInfo">
      <Marquee
        time={convertStringToMarqueeSpeed(text)}
        text={text}
        state={playing ? 'running' : 'paused'}
        lineHeight="12px"
      />
      <p className="trackTimes">
        {formatTime(currentTime)} | {formatTime(duration)}
      </p>
    </div>
    // )
  );
};

export default TrackInfo;

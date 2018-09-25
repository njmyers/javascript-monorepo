import * as React from 'react';
// components
import Marquee from './Marquee';
// sass
import './track-info.sass';

/* Formatters */

const speedFromLength = (string) => Math.floor(string.length / 4);

const padSeconds = (seconds) => (seconds < 10 ? `0${seconds}` : seconds);

const formatTimes = (number) => {
  return Number.isNaN(number) || typeof number !== 'number'
    ? '0:00'
    : `${Math.floor(number / 60)}:${padSeconds(Math.floor(number % 60))}`;
};

/* Functional Stateless Component */

const getArtistString = (currentTrack) => {
  if (currentTrack) {
    const { name, artist } = currentTrack;

    return name ? (artist ? `${name}: ${artist}` : name) : artist ? artist : '';
  } else {
    return '';
  }
};

const TrackInfo = ({
  playing,
  currentTime,
  duration,
  currentTrack,
  sizes,
  classPrefix,
}) => {
  const string = getArtistString(currentTrack);
  const speed = speedFromLength(string);

  return (
    !sizes.mobile && (
      <div className={`${classPrefix}_trackInfo`}>
        <Marquee
          time={speed}
          text={string}
          state={playing ? 'running' : 'paused'}
          lineHeight="12px"
        />
        <p className={`${classPrefix}_trackTimes`}>
          {formatTimes(currentTime)} | {formatTimes(duration)}
        </p>
      </div>
    )
  );
};

export default TrackInfo;

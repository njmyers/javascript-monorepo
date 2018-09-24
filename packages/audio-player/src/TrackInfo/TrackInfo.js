import * as React from 'react';
import { connect } from 'react-redux';
// components
import Marquee from './Marquee';
// sass
import './track-info.sass';

/* Formatters */

const speedFromLength = (string) => Math.floor(string.length / 4);
const padSeconds = (seconds) => (seconds < 10 ? `0${seconds}` : seconds);
const formatTimes = (number) =>
  Number.isNaN(number)
    ? '0:00'
    : `${Math.floor(number / 60)}:${padSeconds(Math.floor(number % 60))}`;

/* Functional Stateless Component */

const TrackInfo = ({ playing, currentTime, duration, currentTrack, sizes }) => {
  const string = currentTrack
    ? `${currentTrack.name}: ${currentTrack.artist}`
    : '';
  const speed = speedFromLength(string);

  return (
    !sizes.mobile && (
      <div className="audioPlayer_trackInfo">
        <Marquee
          time={speed}
          text={string}
          state={playing ? 'running' : 'paused'}
          lineHeight="12px"
        />
        <p className="audioPlayer_trackTimes">
          {formatTimes(currentTime)} | {formatTimes(duration)}
        </p>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  currentTime: state.currentTime,
  duration: state.duration,
  playing: state.playing,
  currentTrack: state.tracks[state.current],
});

export default connect(mapStateToProps)(TrackInfo);

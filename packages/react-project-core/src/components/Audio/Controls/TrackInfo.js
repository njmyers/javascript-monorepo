import React from 'react';
import { connect } from 'react-redux';

import Marquee from '../Marquee';

/* Formatters */

const speedFromLength = (string) => Math.floor(string.length / 4);
const padSeconds = (seconds) => (seconds < 10 ? `0${seconds}` : seconds);
const formatTimes = (number) =>
  Number.isNaN(number)
    ? '0:00'
    : `${Math.floor(number / 60)}:${padSeconds(Math.floor(number % 60))}`;

/* Functional Stateless Component */

const TrackInfo = ({ playing, currentTime, duration, currentTrack }) => {
  const string = currentTrack
    ? `${currentTrack.name}: ${currentTrack.artist}`
    : '';
  const speed = speedFromLength(string);

  return (
    <div className="track-info">
      <Marquee
        time={speed}
        text={string}
        state={playing ? 'running' : 'paused'}
        lineHeight="12px"
      />
      <p>
        {formatTimes(currentTime)} | {formatTimes(duration)}
      </p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentTime: state.audioPlayer.currentTime,
  duration: state.audioPlayer.duration,
  playing: state.audioPlayer.playing,
  currentTrack: state.audioPlayer.tracks[state.audioPlayer.current],
});

export default connect(mapStateToProps)(TrackInfo);

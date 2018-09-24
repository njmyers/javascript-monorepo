import React from 'react';
import { connect } from 'react-redux';

import {
  playerStart,
  playerStop,
  playerPause,
  playerScroll,
} from '../Core/audio-actions';

import Button from './Button';

const Controls = ({ playing, play, pause, stop, next, prev, sizes } = {}) => {
  return (
    <div className="audioPlayer_buttonGroup">
      {!sizes.mobile && (
        <Button
          icon="backward"
          className="audioPlayer_previous"
          onClick={prev}
        />
      )}
      <Button
        icon={!playing ? 'play' : 'pause'}
        className={`audioPlayer-big ${
          !playing ? 'audioPlayer_play' : 'audioPlayer_pause'
        }`}
        onClick={!playing ? play : pause}
        size="lg"
      />
      <Button
        icon="stop"
        className="audioPlayer_stop audioPlayer-big"
        onClick={stop}
        size="lg"
      />
      {!sizes.mobile && (
        <Button icon="forward" className="audioPlayer_next" onClick={next} />
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  playing: state.playing,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  play: () => dispatch(playerStart()),
  pause: () => dispatch(playerPause()),
  stop: () => dispatch(playerStop()),
  next: () => dispatch(playerScroll(1)),
  prev: () => dispatch(playerScroll(-1)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

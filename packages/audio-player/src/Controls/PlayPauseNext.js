import React from 'react';
import { connect } from 'react-redux';
import { mergeProps } from '../Provider';

import {
  playerStart,
  playerStop,
  playerPause,
  playerScroll,
} from '../Core/audio-actions';

import Button from './Button';

const Controls = ({
  playing,
  play,
  pause,
  stop,
  next,
  prev,
  sizes,
  classPrefix,
} = {}) => {
  return (
    <div className={`${classPrefix}_buttonGroup`}>
      {!sizes.mobile && (
        <Button
          icon="backward"
          className={`${classPrefix}_previous`}
          onClick={prev}
          classPrefix={classPrefix}
        />
      )}
      <Button
        icon={!playing ? 'play' : 'pause'}
        className={`${classPrefix}-big ${
          !playing ? `${classPrefix}_play` : `${classPrefix}_pause`
        }`}
        onClick={!playing ? play : pause}
        size="lg"
        classPrefix={classPrefix}
      />
      <Button
        icon="stop"
        className={`${classPrefix}_stop ${classPrefix}-big`}
        onClick={stop}
        size="lg"
        classPrefix={classPrefix}
      />
      {!sizes.mobile && (
        <Button
          icon="forward"
          className={`${classPrefix}_next`}
          onClick={next}
          classPrefix={classPrefix}
        />
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
  mapDispatchToProps,
  mergeProps,
  { storeKey: 'audioPlayer' }
)(Controls);

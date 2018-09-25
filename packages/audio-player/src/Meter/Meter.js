import React from 'react';
import { compose } from 'smalldash';
import { connect } from 'react-redux';

import { playerSeek } from '../Core/audio-actions';

import './meter.sass';

// meter scale increase to create more 'steps'
const scale = 1000;
const scaleValue = (value, max) =>
  !isNaN(value / max) ? Math.ceil((value / max) * scale) : 0;
const deScaleValue = (value, max) => (value / scale) * max;

/*
 TODO: Add debouncing on stateless component
*/

const Meter = ({ currentTime, duration, seek, classPrefix } = {}) => {
  return (
    <div className={`${classPrefix}_meter`}>
      <input
        type="range"
        min="0"
        max={scale}
        value={scaleValue(currentTime, duration)}
        name="seek"
        onChange={seek}
        className={`${classPrefix}_meterInput`}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  duration: state.duration,
  currentTime: state.currentTime,
});

const mapDispatchToProps = (dispatch) => ({
  onSeek: (value, duration) =>
    compose(
      dispatch,
      playerSeek,
      deScaleValue
    )(value, duration),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  seek: (event) =>
    dispatchProps.onSeek(event.target.value, stateProps.duration),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  { storeKey: 'audioPlayer' }
)(Meter);

import { compose } from 'smalldash';
import { connect } from 'react-redux';
import Meter from './Meter';
import { playerSeek } from '../Core/audio-actions';

const scale = 1000;

const deScaleValue = (value, max) => (value / scale) * max;

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

const createMeter = (storeKey) =>
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    { storeKey }
  )(Meter);

export default createMeter;

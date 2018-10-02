import { connect } from 'react-redux';
import { compose } from 'redux';
import mergeProps from '../Provider/default-merge-props';
// actions
import { playerVolume, playerMute } from '../AudioCore/audio-actions';
// component
import Volume from './Volume';
import scale from './scale';

const scaleValue = (value, max = 1) =>
  !isNaN(value / max) ? Math.ceil((value / max) * scale) : 0;

const deScaleValue = (value, max = 1) => (value / scale) * max;

const mapStateToProps = (state, ownProps) => ({
  muted: state.muted,
  volume: scaleValue(state.volume),
});

const mapDispatchToProps = (dispatch) => ({
  setVolume: (value) =>
    compose(
      dispatch,
      playerVolume,
      deScaleValue
    )(value),
  setMute: (value) => dispatch(playerMute(value)),
});

const createVolume = (storeKey) =>
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    { storeKey }
  )(Volume);

export default createVolume;

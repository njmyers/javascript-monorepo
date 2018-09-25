import { connect } from 'react-redux';
import { mergeProps } from '../Provider';
import { compose } from 'redux';
// actions
import { playerVolume, playerMute } from '../Core/audio-actions';
// component
import Volume from './Volume';

const scale = 100;

const deScaleValue = (value, max = 1) => (value / scale) * max;

const mapStateToProps = (state, ownProps) => ({
  muted: state.muted,
  volume: state.volume,
});

const mapDispatchToProps = (dispatch) => ({
  setVolume: (event) =>
    compose(
      dispatch,
      playerVolume,
      deScaleValue
    )(event.target.value),
  setMute: () =>
    compose(
      dispatch,
      playerMute
    )(),
});

const createVolume = (storeKey) =>
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    { storeKey }
  )(Volume);

export default createVolume;

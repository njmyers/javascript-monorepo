import { connect } from 'react-redux';
import mergeProps from '../Provider/default-merge-props';

import {
  playerStart,
  playerStop,
  playerPause,
  playerScroll,
} from '../AudioCore/audio-actions';

import Controls from './Controls';

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

const createControls = (storeKey) =>
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    { storeKey }
  )(Controls);

export default createControls;

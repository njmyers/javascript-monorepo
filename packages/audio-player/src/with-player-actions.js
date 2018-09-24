import * as React from 'react';
import { connect } from 'react-redux';

import {
  playerStop,
  playerStart,
  playerPause,
  playerMute,
  loadTrack,
} from './Core/audio-actions';

const withPlayerActions = (Wrapped) => {
  const mapDispatchToProps = (dispatch) => ({
    audioPlayerStop: () => dispatch(playerStop()),
    audioPlayerStart: () => dispatch(playerStart()),
    audioPlayerPause: () => dispatch(playerPause()),
    audioPlayerMute: () => dispatch(playerMute()),
    loadAudioTrack: (track) => dispatch(loadTrack(track)),
  });

  return connect(
    {},
    mapDispatchToProps
  )(Wrapped);
};

export default withPlayerActions;

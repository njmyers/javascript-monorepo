import * as React from 'react';
import { connect } from 'react-redux';
import mergeProps from './default-merge-props';

import {
  playerStop,
  playerStart,
  playerPause,
  playerMute,
  loadTrack,
  playerShow,
  playerHide,
  playerDestroy,
} from '../AudioCore/audio-actions';

const withPlayer = (storeKey, Provider) => (Wrapped) => {
  const mapStateToProps = (state) => ({
    audioPlayer: state,
  });

  const mapDispatchToProps = (dispatch) => ({
    audioPlayerStop: () => dispatch(playerStop()),
    audioPlayerStart: () => dispatch(playerStart()),
    audioPlayerPause: () => dispatch(playerPause()),
    audioPlayerMute: () => dispatch(playerMute()),
    audioPlayerShow: () => dispatch(playerShow()),
    audioPlayerHide: () => dispatch(playerHide()),
    audioPlayerDestroy: () => dispatch(playerDestroy()),
    loadAudioTrack: (track) => dispatch(loadTrack(track)),
  });

  const options = { storeKey };

  const Connected = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options
  )(Wrapped);

  return (props) => (
    <Provider>
      <Connected {...props} />
    </Provider>
  );
};

export default withPlayer;

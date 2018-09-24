import * as React from 'react';
import { connect } from 'react-redux';

const withPlayerState = (Wrapped) => {
  const mapStateToProps = (state) => ({
    audioPlayer: state,
  });

  return connect(mapStateToProps)(Wrapped);
};

export default withPlayerState;

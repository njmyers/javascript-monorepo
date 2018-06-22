import { connect } from 'react-redux';
import AudioComponent from './AudioComponent';
import { playerSize } from './audio-actions';

const mapStateToProps = (state, ownProps) => ({
  audioPlayer: state.audioPlayer,
  display: state.audioPlayer.display,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  playerSize: (value) => dispatch(playerSize(value)),
});

const Audio = connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioComponent);

export default Audio;

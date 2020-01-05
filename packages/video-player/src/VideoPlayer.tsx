import { connect } from 'react-redux';
import {
  videoButton,
  loadVideoPlayer,
  resizeVideoPlayer,
  saveVideoEncoding,
} from './video-player-actions';
import VideoPlayerComponent from './VideoPlayerComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    videoPlayer: state.videoPlayer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    videoButton: (event) => dispatch(videoButton(event)),
    loadVideoPlayer: () => dispatch(loadVideoPlayer()),
    resizeVideoPlayer: () => dispatch(resizeVideoPlayer()),
    saveVideoEncoding: () => dispatch(saveVideoEncoding()),
  };
};

const VideoPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayerComponent);

export default VideoPlayer;

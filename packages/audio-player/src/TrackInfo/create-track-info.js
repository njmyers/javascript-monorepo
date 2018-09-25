import { connect } from 'react-redux';
import { mergeProps, mapDispatchToProps } from '../Provider';
import TrackInfo from './TrackInfo';

const mapStateToProps = (state) => ({
  currentTime: state.currentTime,
  duration: state.duration,
  playing: state.playing,
  currentTrack: state.tracks[state.current],
});

const createTrackInfo = (storeKey) =>
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    { storeKey }
  )(TrackInfo);

export default createTrackInfo;

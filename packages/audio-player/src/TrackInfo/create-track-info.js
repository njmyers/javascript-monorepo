import { connect } from 'react-redux';
import mapDispatchToProps from '../Provider/default-map-dispatch-to-props';
import mergeProps from '../Provider/default-merge-props';
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

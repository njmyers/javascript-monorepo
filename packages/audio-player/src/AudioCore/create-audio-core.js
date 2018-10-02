import { compose } from 'smalldash';
import { connect } from 'react-redux';
import AudioCore from './AudioCore';
import mapDispatchToProps from '../Provider/default-map-dispatch-to-props';
import mergeProps from '../Provider/default-merge-props';

const mapStateToProps = (state) => ({
  display: state.display,
});

const createAudioCore = (storeKey) =>
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    { storeKey }
  )(AudioCore);

export default createAudioCore;

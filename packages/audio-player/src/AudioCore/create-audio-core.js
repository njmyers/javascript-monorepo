import { compose } from 'smalldash';
import { connect } from 'react-redux';
import AudioCore from './AudioCore';
import { mapDispatchToProps, mergeProps } from '../Provider';

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

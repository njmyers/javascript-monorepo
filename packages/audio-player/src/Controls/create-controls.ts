import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
import Controls from './Controls';

const createControls = () =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Controls);

export default createControls;

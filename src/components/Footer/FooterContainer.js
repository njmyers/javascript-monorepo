import { connect } from 'react-redux';
import FooterComponent from './FooterComponent';
import { updateContentSize } from '../Root/ui-sizing-actions';

const mapStateToProps = (state, ownProps) => ({
	audioPlayer: state.audioPlayer,
	audioPlayerSize: state.UI.audioPlayerSize,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateContentSize: (size) => dispatch(updateContentSize(size, 'footerSize')),
});

const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterComponent);

export default Footer;

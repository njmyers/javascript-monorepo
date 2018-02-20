import { connect } from 'react-redux';
import RootComponent from './RootComponent';
import { windowDetector } from './mobile-actions';
import { updateContentHeight } from './ui-sizing-actions';
import { withRouter } from 'react-router-dom';
import { loadFacebookAPI } from '../Facebook/facebook-actions';

const mapStateToProps = (state, ownProps) => {
	return {
		UI: state.UI,
		audioPlayer: state.audioPlayer,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		windowDetector: (width, height) => dispatch(windowDetector(width, height)),
		loadFacebookAPI: () => dispatch(loadFacebookAPI()),
	};
};

const Root = withRouter(connect(mapStateToProps, mapDispatchToProps)(RootComponent));

export default Root;

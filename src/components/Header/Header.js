import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateContentSize } from '../Root/ui-sizing-actions';

import HeaderComponent from './HeaderComponent';

import { menuOn, menuOff } from '../Root/mobile-actions';

const mapStateToProps = (state, ownProps) => {
	return {
		isMobile: state.UI.isMobile,
		isMenuOn: state.UI.isMenuOn,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		menuOn: () => dispatch(menuOn()),
		menuOff: () => dispatch(menuOff()),
		updateContentSize: (height) => dispatch(updateContentSize(height, 'headerSize')),
	};
};

const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));

export default Header;

import { connect } from 'react-redux';
import MobileNavComponent from './MobileNavComponent';
import { menuOff } from '../../Root/mobile-actions';

function scrollTop() {
	window.scroll({
		top: 0,
		left: 0,
	});
}

const mapStateToProps = (state, ownProps) => {
	return {
		UI: state.UI,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		menuOff: () => {
			scrollTop();
			dispatch(menuOff());
		},
	};
};

const MobileNav = connect(mapStateToProps, mapDispatchToProps)(MobileNavComponent);

export default MobileNav;

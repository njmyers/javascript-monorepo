import { mobileConstants } from './mobile-actions';
import { UIConstants } from './ui-sizing-actions';

const constants = { ...UIConstants, ...mobileConstants };

const initialMobileMenu = {
	position: 'absolute',
	top: '-9999px',
	left: '-9999px',
	opacity: 0,
};

const size = {
	height: undefined,
	widht: undefined,
	position: undefined,
};

const blankUI = {
	styles: '',
	mobileMenuStyle: initialMobileMenu,
	isMenuOn: false,
	isMobile: false,
	footerSize: size,
	headerSize: size,
	contentSize: size,
	audioPlayerSize: size,
};

export default function UIReducer(state = blankUI, action) {
	switch (action.type) {
		case constants.ANIMATE_MENU:
			return Object.assign({}, state, {
				[action.key]: { ...state[action.key], ...action.payload },
			});
		case constants.HIDE_MENU:
		case constants.SHOW_MENU:
		case constants.IS_MOBILE:
		case constants.IS_NOT_MOBILE:
		case constants.IS_LANDSCAPE:
		case constants.IS_PORTRAIT:
			return Object.assign({}, state, {
				[action.key]: action.value,
			});
		case constants.UPDATE_CONTENT_SIZE:
			return Object.assign({}, state, {
				[action.key]: action.payload,
			});
		default:
			return state;
	}
}

import { UIConstants } from './ui-sizing-actions';

const constants = { ...UIConstants };

const initialMobileMenu = {
	position: 'absolute',
	top: '-9999px',
	left: '-9999px',
	opacity: 0,
};

const size = {
	height: undefined,
	width: undefined,
	position: undefined,
};

const blankUI = {
	styles: '',
	mobileMenuStyle: initialMobileMenu,
	isMenuOn: false,
	isMobile: true,
	footerSize: size,
	headerSize: size,
	contentSize: size,
	audioPlayerSize: size,
};

export default function UIReducer(state = blankUI, action) {
	switch (action.type) {
		case 'DEVICE':
		case 'ORIENTATION':
		case 'DEVICE':
		case 'MENU_STATE':
			return {
				...state,
				[action.key]: action.payload,
			};
		case 'ANIMATE_MENU':
			return {
				...state,
				[action.key]: { ...state[action.key], ...action.payload },
			};
		case constants.UPDATE_CONTENT_SIZE:
			return Object.assign({}, state, {
				[action.key]: action.payload,
			});
		default:
			return state;
	}
}

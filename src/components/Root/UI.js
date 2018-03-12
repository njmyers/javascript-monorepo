const size = {
	height: undefined,
};

const blankUI = {
	isMobile: true,
	footerSize: size,
	headerSize: size,
	contentSize: size,
	audioPlayerSize: size,
};

export default function UIReducer(state = blankUI, action) {
	switch (action.type) {
		case 'UPDATE_CONTENT_SIZE':
			return Object.assign({}, state, {
				[action.key]: action.payload,
			});
		default:
			return state;
	}
}

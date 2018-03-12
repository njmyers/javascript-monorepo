export const updateContentSize = (key) => (payload) => ({
	type: 'UPDATE_CONTENT_SIZE',
	key,
	payload,
});

export const updateOrientation = (payload) => ({ type: 'UPDATE_ORIENTATION', payload });
export const updateIsMobile = (payload) => ({ type: 'UPDATE_MOBILE', payload });

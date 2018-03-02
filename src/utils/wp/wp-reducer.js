import uniq from 'lodash/uniq';

const blankPost = {
	status: 'blank',
	loadedAt: '',
	data: [],
	totalPages: '',
	fetchedPages: [],
	filter: '',
};

/* 
	combineReducers prefers it's own function for each slice.
	We use this function to create slices that follow the post pattern.
	Think of it as a type of parallel reducer composition vs serial composition of combineReducers

 */

const WPReducer = (slice) => (state = blankPost, action) => {
	if (action.slug !== slice) return state;

	switch (action.type) {
		case 'POSTS_REQUEST':
			return {
				...state,
				status: 'loading',
			};
		case 'POSTS_RESOLVE':
			return {
				...state,
				data: uniq([...state.data, ensureArray(action.payload)]),
				status: 'resolved',
				loadedAt: new Date(),
			};
		case 'POSTS_HEADER':
			return {
				...state,
				header: action.payload,
				totalPages: action.payload['x-wp-totalpages'],
				fetchedPages: uniq([...state.fetchedPages]),
			};
		case 'POSTS_FILTER_UPDATE':
			return {
				...state,
				filter: action.payload,
			};
		case 'POSTS_REQUEST_ERROR':
			return { ...state, error: action.payload, status: 'error' };
		default:
			return state;
	}
};

function ensureArray(thing) {
	if (Array.isArray(thing)) return thing;
	else return [thing];
}

export default WPReducer;

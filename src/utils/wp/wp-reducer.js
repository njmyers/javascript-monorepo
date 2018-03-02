import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';
import parse from 'parse-link-header';

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

const extractCurrent = (header) => {
	const parsed = parse(header.link);
	return parsed.next
		? Number(parsed.next.page) - 1
		: parsed.prev ? Number(parsed.prev.page) + 1 : undefined;
};

const validateFetched = (header, fetched) => {
	return uniq([extractCurrent(header), ...fetched]).filter((num) => typeof num === 'number');
};

const validateTotal = (header, total) => {
	return header['x-wp-totalpages'] ? header['x-wp-totalpages'] : total;
};

const ensureArray = (thing) => (Array.isArray(thing) ? thing : [thing]);

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
				data: uniqBy([...state.data, ...ensureArray(action.payload)], 'id'),
				status: 'resolved',
				loadedAt: new Date(),
			};
		case 'POSTS_HEADER':
			return {
				...state,
				totalPages: validateTotal(action.payload, state.totalPages),
				fetchedPages: validateFetched(action.payload, state.fetchedPages),
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

export default WPReducer;

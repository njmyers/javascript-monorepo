const blankPost = {
	status: 'blank',
	loadedAt: '',
	data: [],
	totalPages: '',
	currentPage: 1, // x-wp-totalpages is 1 indexed
	fetchedPages: [],
	filter: '',
};

/* 
	combineReducers prefers it's own function for each slice.
	We use this function to create slices that follow the post pattern.
	Think of it as a type of parallel reducer composition vs serial composition of combineReducers

 */

function postReducerCreator(POSTTYPE) {
	const SUCCESS = `${POSTTYPE}_POSTS_SUCCESS`;
	const ERROR = `${POSTTYPE}_POSTS_ERROR`;
	const REQUEST = `${POSTTYPE}_POSTS_REQUEST`;
	const TIMESTAMP = `${POSTTYPE}_POSTS_TIMESTAMP`;
	const RESOLVE = `${POSTTYPE}_POSTS_RESOLVE`;
	const TOTAL_PAGES = `${POSTTYPE}_POSTS_TOTAL_PAGES`;
	const CURRENT_PAGE = `${POSTTYPE}_POSTS_CURRENT_PAGE`;
	const FILTER_UPDATE = `${POSTTYPE}_POSTS_FILTER_UPDATE`;
	const FETCHED_PAGES = `${POSTTYPE}_POSTS_FETCHED_PAGES`;
	const NEXT_PAGE = `${POSTTYPE}_POSTS_NEXT_PAGE`;

	return function(state = blankPost, action) {
		switch (action.type) {
			case REQUEST:
			case SUCCESS:
			case ERROR:
				return Object.assign({}, state, {
					[action.key]: action.value,
				});
			case TIMESTAMP:
			case TOTAL_PAGES:
			case CURRENT_PAGE:
			case NEXT_PAGE:
			case FILTER_UPDATE:
				return Object.assign({}, state, {
					[action.key]: action.payload,
				});
			case RESOLVE:
				return Object.assign({}, state, {
					// add data to  existing array
					[action.key]: removeDuplicatePosts([
						...state[action.key],
						...ensureArray(action.payload),
					]),
				});
			case FETCHED_PAGES:
				return Object.assign({}, state, {
					[action.key]: [action.payload, ...state[action.key]],
				});
			default:
				return state;
		}
	};
}

/**
 * Use this secton to create wordpress state slices
 */

// export const bandReducer = postReducerCreator('BAND');

function removeDuplicatePosts(arr) {
	const ids = [];

	const filtered = arr.filter((obj) => {
		const bool = ids.includes(obj.id);
		if (!bool) ids.push(obj.id);
		return !bool;
	});

	return filtered;
}

function ensureArray(thing) {
	if (Array.isArray(thing)) return thing;
	else return [thing];
}

// statuses => blank, loading, filtered, resolved, error

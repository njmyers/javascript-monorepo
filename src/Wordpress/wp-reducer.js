import { uniq } from 'smalldash';
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
        combineReducers prefers it's own function for each postType.
        We use this function to create postTypes that follow the post pattern.
        Think of it as a type of parallel reducer composition vs serial composition of combineReducers

 */

const extractCurrent = (header) => {
  if (header.link) {
    const parsed = parse(header.link);
    return parsed.next
      ? Number(parsed.next.page) - 1
      : parsed.prev
        ? Number(parsed.prev.page) + 1
        : undefined;
  } else return 1;
};

const validateFetched = (header, fetched) => {
  return uniq([extractCurrent(header), ...fetched]).filter(
    (num) => typeof num === 'number'
  );
};

const validateTotal = (header, total) => {
  return header['x-wp-totalpages'] ? header['x-wp-totalpages'] : total;
};

const ensureArray = (thing) => (Array.isArray(thing) ? thing : [thing]);

const WPReducer = (postType) => (state = blankPost, action) => {
  if (action.postType !== postType) return state;

  switch (action.type) {
    case 'POSTS_REQUEST':
      return {
        ...state,
        status: 'loading',
      };
    case 'POSTS_RESOLVE':
      return {
        ...state,
        data: uniq(
          [...state.data, ...ensureArray(action.payload)],
          (object) => object.id
        ),
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

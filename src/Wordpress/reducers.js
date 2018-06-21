// @flow
import type { Actions } from './actions';

export type PostData = {
  status: string,
  loadedAt: number,
  data: Array<{}>,
  totalPages: number,
  fetchedPages: [],
  filter: string,
  abortToken: {} | null,
};

export const initialPostType = {
  status: 'initial',
  loadedAt: 0,
  data: [],
  totalPages: 0,
  fetchedPages: [],
  filter: '',
  abortToken: null,
};

/**
  Slices up the parallel WP data store into pieces
 */
export const slicer = (reducer: Function) => (state, action: Actions) =>
  action.postType
    ? {
        [action.postType]: reducer(state[action.postType], action),
      }
    : null;

const WPReducer = (state: PostData = initialPostType, action: Actions) => {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return {
        ...state,
        status: 'loading',
      };
  }
};

export default slicer(WPReducer);

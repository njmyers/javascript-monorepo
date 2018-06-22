// @flow
import {
  postsResolve,
  postsHeader,
  postsSuccess,
  postsRequestError,
  postsRequest,
} from './actions';

import { initialPostType } from './reducers';

type PostType = {};

const postType = (dispatch: Function, postType: string) => ({
  ...initialPostType,
  actions: Object.freeze({
    postsRequest: (query) => dispatch(postsRequest(postType)(query)),
  }),
});

export default postType;

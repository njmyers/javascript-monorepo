// @flow
import axios from 'axios';
import {
  postsAbortToken,
  postsHeader,
  postsRequestError,
  postsResolve,
} from './actions';

import type { Actions } from './actions';

const api = axios.create({
  baseURL: process.env.REACT_APP_WP_API_URL,
});

const { CancelToken } = axios;

const request = ({ postType, query }) => (state) => (dispatch) => {
  api
    .get(postType, {
      params: query,
      cancelToken: new CancelToken((abort) => {
        dispatch(postsAbortToken(postType)(abort));
      }),
    })
    .then(({ data, status, headers }) => {
      dispatch(postsHeader(postType)(headers));
      dispatch(postsResolve(postType)(data));
    })
    .catch((error) => {
      dispatch(postsRequestError(postType)(error));
    });
};

const abort = ({ postType }) => (state) => (dispatch) => {
  state[postType].abortToken();
};

/**
 * Custom Asynchronous Middleware
 * This is where all of the async fun starts
 * This is where all of the side effects are
 * This is basically thunk style
 */
const async = (action: Actions) => (state) => (dispatch) => {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return request(action)(state)(dispatch);
    case 'POSTS_ABORT_REQUEST':
      return abort(action)(state)(dispatch);
  }
};

export default async;

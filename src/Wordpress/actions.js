// @flow
export const postsResolve = (postType: string) => (payload: Array<{}>) => ({
  type: 'POSTS_RESOLVE',
  postType,
  payload,
});

export const postsHeader = (postType: string) => (payload) => ({
  type: 'POSTS_HEADER',
  postType,
  payload,
});

export const postsSuccess = (postType: string) => (payload) => ({
  type: 'POSTS_SUCCESS',
  postType,
  payload,
});

export const postsRequestError = (postType: string) => (payload) => ({
  type: 'POSTS_REQUEST_ERROR',
  postType,
  payload,
});

// user actionable
export const postsRequest = (postType: string) => (query: {}) => ({
  type: 'POSTS_REQUEST',
  query,
  postType,
});

export const postsFilterUpdate = (postType: string) => (payload: string) => ({
  type: 'POSTS_FILTER_UPDATE',
  postType,
  payload,
});

export const postsAbortToken = (postType: string) => (payload: string) => ({
  type: 'POSTS_ABORT_TOKEN',
  postType,
  payload,
});

export const postsAbortRequest = (postType: string) => () => ({
  type: 'POSTS_ABORT_REQUEST',
  postType,
});

type Fn<T> = (...args: Array<any>) => T;
type ExtractReturn = <T>(Fn<T>) => T;

export type Actions =
  | $Call<ExtractReturn, typeof postsResolve>
  | $Call<ExtractReturn, typeof postsHeader>
  | $Call<ExtractReturn, typeof postsSuccess>
  | $Call<ExtractReturn, typeof postsRequestError>
  | $Call<ExtractReturn, typeof postsRequest>
  | $Call<ExtractReturn, typeof postsAbortToken>
  | $Call<ExtractReturn, typeof postsAbortRequest>;

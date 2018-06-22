// automated

export const postsResolve = (payload, slug) => ({
  type: 'POSTS_RESOLVE',
  slug,
  payload,
});
export const postsHeader = (payload, slug) => ({
  type: 'POSTS_HEADER',
  slug,
  payload,
});
export const postsSuccess = (payload, slug) => ({
  type: 'POSTS_SUCCESS',
  slug,
  payload,
});
export const postsRequestError = (payload, slug) => ({
  type: 'POSTS_REQUEST_ERROR',
  slug,
  payload,
});

// user actionable

export const postsRequest = (slug) => (query) => ({
  type: 'POSTS_REQUEST',
  slug,
  query,
});
export const postsFilterUpdate = (payload, slug) => ({
  type: 'POSTS_FILTER_UPDATE',
  slug,
  payload,
});

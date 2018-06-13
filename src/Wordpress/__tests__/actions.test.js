import {
  postsResolve,
  postsHeader,
  postsSuccess,
  postsRequestError,
  postsRequest,
} from '../actions';

describe('testing wordpress action creators', () => {
  test('it creates an action POSTS_RESOLVE', () => {
    expect(postsResolve('posts')('payload')).toMatchObject({
      type: 'POSTS_RESOLVE',
      postType: 'posts',
      payload: 'payload',
    });
  });

  test('it creates an action with the correct type', () => {
    expect(postsHeader('posts')('payload')).toMatchObject({
      type: 'POSTS_HEADER',
      postType: 'posts',
      payload: 'payload',
    });
  });

  test('it creates an action with the correct type', () => {
    expect(postsSuccess('posts')('payload')).toMatchObject({
      type: 'POSTS_SUCCESS',
      postType: 'posts',
      payload: 'payload',
    });
  });

  test('it creates an action with the correct type', () => {
    expect(postsRequestError('posts')('payload')).toMatchObject({
      type: 'POSTS_REQUEST_ERROR',
      postType: 'posts',
      payload: 'payload',
    });
  });

  test('it creates an action with the correct type', () => {
    expect(postsRequest('posts')('query')).toMatchObject({
      type: 'POSTS_REQUEST',
      postType: 'posts',
      query: 'query',
    });
  });
});

import createRootReducer from '../create-root-reducer';
import { createStore } from 'redux';

describe('createRootReducer function', () => {
  test('it executes without an error', () => {
    expect(createRootReducer(['posts'])).toThrow();
  });

  test('the root reducer creates a store', () => {
    const rootReducer = createRootReducer(['posts']);
    const store = createStore(rootReducer);
    expect(store.getState()).toMatchSnapshot();
  });

  test('the root reducer creates a store with multiple post types', () => {
    const rootReducer = createRootReducer(['posts', 'categories']);
    const store = createStore(rootReducer);
    expect(store.getState()).toMatchSnapshot();
  });
});

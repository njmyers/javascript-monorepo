import * as redux from 'redux';
import audioMiddleware from '../Core/audio-middleware';

import rootReducer from '../Core/audio-reducer';

const createStore = () => {
  const store = redux.createStore(
    rootReducer,
    redux.applyMiddleware(audioMiddleware)
  );

  return store;
};

export default createStore;

import * as redux from 'redux';
import audioMiddleware from '../AudioCore/audio-middleware';

import rootReducer from '../AudioCore/audio-reducer';

const createStore = () => {
  const store = redux.createStore(
    rootReducer,
    redux.applyMiddleware(audioMiddleware)
  );

  return store;
};

export default createStore;

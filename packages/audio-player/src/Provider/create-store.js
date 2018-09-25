import * as redux from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from '../Core/audio-reducer';
import rootEpic from '../Core/audio-epics';

const createStore = () => {
  const epicMiddleware = createEpicMiddleware();

  const store = redux.createStore(
    rootReducer,
    redux.applyMiddleware(epicMiddleware)
  );
  // run the epic AFTER store is created
  epicMiddleware.run(rootEpic);

  return store;
};

export default createStore;

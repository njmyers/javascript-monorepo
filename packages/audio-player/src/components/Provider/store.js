import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import audioReducer from '../Core/audio-reducer';
import rootEpic from '../Core/audio-epics';

const rootReducer = combineReducers({
  audioPlayer: audioReducer,
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;

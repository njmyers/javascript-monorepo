import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import audioReducer from '../Core/audio-reducer';
import rootEpic from '../Core/audio-epics';

const epicMiddleware = createEpicMiddleware();

const store = createStore(audioReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;

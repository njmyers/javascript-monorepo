import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, compose } from 'redux';
import rootEpic from './root-epic';

const epicMiddleware = createEpicMiddleware(rootEpic);
const middlewares = [thunk, epicMiddleware];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default compose(applyMiddleware(...middlewares));

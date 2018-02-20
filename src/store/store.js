import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import reducer from './root-reducer';
import { loadState, saveState } from './local-storage';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

const persistedState = loadState();

const store =
	process.env.NODE_ENV !== 'development'
		? compose(applyMiddleware(...middlewares))(createStore)(reducer, persistedState)
		: compose(applyMiddleware(...middlewares))(createStore)(reducer);

if (process.env.NODE_ENV !== 'development') {
	store.subscribe(
		throttle(() => {
			const state = store.getState();
			saveState(state);
		}),
		1000
	);
}

export default store;

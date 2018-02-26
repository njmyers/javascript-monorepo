import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import reducer from './root-reducer';
import { loadLocalApplication, saveLocalApplication } from './local-storage';
import { ensureDateObject } from '../components/utils/dates';

const TIMESTAMP = new Date();
const REFRESH = 86400 * 31 * 1000; // monthly

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

const application = loadLocalApplication();
const persistedState = application ? application.state : undefined;
const saveDate = application ? ensureDateObject(application.date) : TIMESTAMP;

const store =
	process.env.NODE_ENV !== 'development' || saveDate - TIMESTAMP < REFRESH
		? compose(applyMiddleware(...middlewares))(createStore)(reducer, persistedState)
		: compose(applyMiddleware(...middlewares))(createStore)(reducer);

if (process.env.NODE_ENV !== 'development') {
	store.subscribe(
		throttle(() => {
			const application = {
				state: store.getState(),
				date: TIMESTAMP,
			};

			saveLocalApplication(application);
		}),
		1000
	);
}

export default store;

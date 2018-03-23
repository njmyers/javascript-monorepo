import { createStore } from 'redux';
import middleware from './middleware';
import throttle from 'lodash.throttle';
import reducer from './root-reducer';
import { loadLocalApplication, saveLocalApplication } from './local-storage';
import { ensureDateObject } from '../utils/dates';
import useStorage from './use-storage';

const REFRESH = 86400 * 1000; // daily
const INVALIDATE = 1521761285634; // Date.now()

const application = loadLocalApplication();
const persistedState = application ? application.state : undefined;

// no date means 0 will automatically invalidate
const stateDate = application ? application.date : 0;

const store =
	process.env.NODE_ENV !== 'development' && useStorage(REFRESH, INVALIDATE)(stateDate)
		? middleware(createStore)(reducer, persistedState)
		: middleware(createStore)(reducer);

if (process.env.NODE_ENV !== 'development') {
	store.subscribe(
		throttle(() => {
			const application = {
				state: store.getState(),
				date: Date.now(),
			};

			saveLocalApplication(application);
		}),
		1000
	);
}

export default store;

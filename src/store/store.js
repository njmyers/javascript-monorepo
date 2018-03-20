import { createStore } from 'redux';
import middleware from './middleware';

import { throttle } from 'smalldash';
import reducer from './root-reducer';
import { loadLocalApplication, saveLocalApplication } from './local-storage';
import { ensureDateObject } from '../utils/dates';

const TIMESTAMP = new Date();
const REFRESH = 86400 * 31 * 1000; // monthly
const INVALIDATE = '2018-03-02T22:17:33.910Z';

const application = loadLocalApplication();
const persistedState = application ? application.state : undefined;
const saveDate = application ? ensureDateObject(application.date) : TIMESTAMP;

const store =
	process.env.NODE_ENV !== 'development' ||
	saveDate - TIMESTAMP < REFRESH ||
	TIMESTAMP < ensureDateObject(INVALIDATE)
		? middleware(createStore)(reducer, persistedState)
		: middleware(createStore)(reducer);

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

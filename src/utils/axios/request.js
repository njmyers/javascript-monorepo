import Observable from '../rxjs';
import compose from 'lodash/fp/compose';

import api from './config';
import createURL from './query-defaults';
import log from '../log/log';

const request = (slug) => (query) => {
	const URL =
		process.env.NODE_ENV !== 'production'
			? log(createURL(slug)(query))
			: createURL(slug)(query);

	return Observable.from(api.get(URL));
};

export default request;

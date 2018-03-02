import axios from 'axios';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import applyDefaults from '../queries/create-url';
import log from '../log/log';

/* Apply Default Query Method */
const createURL = applyDefaults({});

/* Axios API Stub Method */
const api = axios.create({ baseURL: `${process.env.REACT_APP_WP_API_URL}/wp-json/wp/v2` });

export default (slug) => (query) => {
	const URL =
		process.env.NODE_ENV !== 'production'
			? log(createURL(slug)(query))
			: createURL(slug)(query);

	return Observable.from(api.get(URL));
};

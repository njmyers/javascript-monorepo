import { WP_API_URL } from './constants';

export function fetchACF({
	method = 'GET',
	endpoint = 'wp-json/wp/v2',
	type,
	pre,
	header,
	format,
	success,
	error,
	post,
} = {}) {
	return (query = {}, id) => {
		let url = `${WP_API_URL}/${endpoint}/${type}`;

		if (id) url += `/${id}`;

		if (Object.keys(query).length > 0) {
			let queryString = '';

			for (let key in query) {
				queryString += `${key}=${query[key]}&`;
			}

			if (process.env.NODE_ENV === 'development') console.log(queryString);

			url += `?${queryString}`;
		}

		if (process.env.NODE_ENV === 'development') console.log(`fetch request url: ${url}`);

		return (dispatch) => {
			if (pre) dispatch(pre());

			return fetch(url, { method })
				.then((res) => {
					if (header) dispatch(header(res.headers));
					return res.json();
				})
				.then((data) => {
					if (format) return dispatch(success(format(data)));
					else return dispatch(success(data));
				})
				.then(() => {
					if (post) dispatch(post());
				})
				.catch((err) => {
					if (process.env.NODE_ENV === 'development') console.log(err);
					dispatch(error(err));
				});
		};
	};
}

import { MAIL_API_KEY, MAIL_URL } from './constants';

export default function fetchPost({
	method = 'POST',
	endpoint = 'send',
	type,
	pre,
	header,
	success,
	error,
	post,
} = {}) {
	return (recipient, body) => {
		return (dispatch, getState) => {
			if (pre) dispatch(pre());

			let url = `${MAIL_URL}/${endpoint}/${recipient}`;

			return fetch(url, {
				method,
				headers: {
					Accept: 'application/json',
					Authorization: MAIL_API_KEY,
					'Content-Type': 'application/json',
				},
				body,
			})
				.then((res) => {
					if (header) dispatch(header(res.headers));
					return res.json();
				})
				.then((data) => dispatch(success(data)))
				.then(() => {
					if (post) return dispatch(post());
				})
				.catch((err) => {
					if (process.env.NODE_ENV === 'development') console.log(err);
					dispatch(error(err));
				});
		};
	};
}

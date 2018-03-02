import Observable from '../rxjs';
import request from '../axios/request';
import { postsHeader, postsResolve, postsRequestError } from './wp-actions';

const WPEpic = (actions$) =>
	actions$.ofType('POSTS_REQUEST').mergeMap(({ slug, query } = {}) =>
		request(slug)(query)
			.mergeMap((response) =>
				Observable.concat(
					Observable.of(postsHeader(response.headers, slug)),
					Observable.of(postsResolve(response.data, slug))
				)
			)
			.catch((error) => Observable.of(postsRequestError(error, slug)))
	);

export default WPEpic;

import path from 'path';
import capitalize from './capitalize';

const cache = {};

function importAll(r) {
	r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('./', false, /\.js$/));

export { capitalize };

import myEquals from '../equals';
import sampleEquals from 'deep-equal';

import dataset from './private-dataset';

const createLargeObject = (limit) => (obj, counter = 0) =>
	counter < limit ? createLargeObject(limit)({ ...obj, key: obj }, counter + 1) : obj;

const large = createLargeObject(1000)(dataset);

test('outperforms sample deep equals', () => {
	const dateStart = Date.now();
	myEquals(large, large);
	const dateEnd = Date.now();

	const dateStartSample = Date.now();
	sampleEquals(large, large);
	const dateEndSample = Date.now();

	expect(dateEnd - dateStart).toBeLessThanOrEqual(dateEndSample - dateStartSample);
});

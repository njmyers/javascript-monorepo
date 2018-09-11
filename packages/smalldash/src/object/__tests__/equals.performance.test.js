import myEquals from '../equals';
import deepEqual from 'deep-equal';
import fastDeepEqual from 'fast-deep-equal';

import dataset from 'datasets-us-states-abbr-names';

const createLargeObject = (limit) => (obj, counter = 0) =>
  counter < limit
    ? createLargeObject(limit)({ ...obj, key: obj }, counter + 1)
    : obj;

const large = createLargeObject(1000)(dataset);

describe('it performs comparatively to other deep equality packages', () => {
  test('performs same as deep-equal', () => {
    const dateStart = Date.now();
    expect(myEquals(large, large)).toBe(true);
    const dateEnd = Date.now();

    const dateStartSample = Date.now();
    expect(deepEqual(large, large)).toBe(true);
    const dateEndSample = Date.now();

    // allow margin of error
    expect(dateEnd - dateStart - 2).toBeLessThanOrEqual(
      dateEndSample - dateStartSample
    );
  });

  test('performs same as deep-equal', () => {
    const dateStart = Date.now();
    expect(myEquals(large, large)).toBe(true);
    const dateEnd = Date.now();

    const dateStartSample = Date.now();
    expect(fastDeepEqual(large, large)).toBe(true);
    const dateEndSample = Date.now();

    // allow margin of error
    expect(dateEnd - dateStart - 2).toBeLessThanOrEqual(
      dateEndSample - dateStartSample
    );
  });
});

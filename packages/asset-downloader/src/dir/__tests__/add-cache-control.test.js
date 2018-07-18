import { addCacheControlStub, reduceExcludes } from '../add-cache-control';

const age = 31536000;

const excludeMe = {
  Key: '/some/path/to/index.html',
};

const includeMe = {
  Key: '/some/path/to/index.js',
};

const addCache = addCacheControlStub(['index.html'])(age);

test('create regex or string from array of excludes', () => {
  const excludes = ['index.html', 'service-worker.js', 'file.html'];
  const expected = 'index.html|service-worker.js|file.html';

  expect(reduceExcludes(excludes)).toBe(expected);
});

test('add cache control key correctly', () => {
  expect(addCache(includeMe)).toMatchObject({
    ...includeMe,
    CacheControl: 'max-age=' + age,
  });
});

test('add cache control key correctly ignoring exclude', () => {
  expect(addCache(excludeMe)).toMatchObject({
    ...excludeMe,
    CacheControl: 'max-age=0',
  });
});

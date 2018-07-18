import fs from 'fs';

/**
 * @param {array} excludes array of names to create a regular expression with
 */
export const reduceExcludes = (excludes) =>
  excludes.reduce((a, b) => `${a}|${b}`);

/**
 * @param {array} excludes array of filenames to exclude from cache control
 * @param {number} age number of seconds to add to CacheControl metadata
 * @param {object} container Object with S3 valid properties
 */
export const addCacheControlStub = (excludes) => (age) => (container) => {
  const regex = new RegExp(reduceExcludes(excludes), 'gi');
  const exclude = regex.test(container.Key);
  const CacheControl = exclude ? 'max-age=0' : `max-age=${age}`;

  return {
    ...container,
    CacheControl,
  };
};

export default addCacheControlStub(['index.html', 'registerServiceWorker.js'])(
  31536000
);

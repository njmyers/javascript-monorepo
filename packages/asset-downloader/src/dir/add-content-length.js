import fs from 'fs';

/**
 * @param {object} container Object with S3 valid properties. Must have Key!
 */
const addContentLength = (container) => ({
  ...container,
  ContentLength: fs.statSync(container.Key).size,
});

export default addContentLength;

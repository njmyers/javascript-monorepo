import mime from 'mime-types';

/**
 * @param {*} container
 */
const addContentType = (container) => ({
  ...container,
  ContentType: mime.lookup(container.Key),
});

export default addContentType;

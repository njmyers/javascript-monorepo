// @ts-nocheck

/**
 * Ensure no leading slashes in path part
 * @param  {string} path the path part
 * @return {string}      the path part with no leading slashes
 */
function normalizePath(path) {
  return path.charAt(0) === '/' ? normalizePath(path.slice(1)) : path;
}

/**
 * Get the base url or create one from the wpBase
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
function getBaseURL({ wpBase, baseURL } = {}) {
  if (!baseURL && !wpBase) {
    throw new Error('You must supply a wpBase or baseURL');
  }
  // prefer wpBase
  else if (wpBase) {
    return `https://${normalizePath(wpBase)}/wp-json/wp/v2`;
  } else {
    return baseURL;
  }
}

export default getBaseURL;

import path from 'path';

/**
 * Helper function that turns a relative path into an absolute path using the
 * default resolve method from the node path module
 */
function pathify(relative: string): string {
  return path.resolve(relative);
}

export default pathify;

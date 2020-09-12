import path from 'path';

/**
 * Return a relative path transformed into an absolute path
 *
 * @param relative - A relative path string
 * @returns An absolute path string
 */
function pathify(relative: string): string {
  return path.resolve(relative);
}

export default pathify;

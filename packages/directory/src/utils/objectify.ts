import { FileObject } from '../types';

/**
 * Turns the path into an object with property 'path'
 *
 * @param path - An absolute path string
 * @returns A file object
 */
function objectify(path: string): FileObject {
  return {
    path,
    include: true,
  };
}

export default objectify;

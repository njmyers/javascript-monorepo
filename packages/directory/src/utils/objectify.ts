import { FileDescriptor } from '../File';

/**
 * Turns the path into an object with property 'path'
 *
 * @param path - An absolute path string
 * @returns A file object
 */
function objectify(path: string): FileDescriptor {
  return {
    path,
    include: true,
  };
}

export default objectify;

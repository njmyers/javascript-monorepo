// types
import { FileObject } from '../types';

/**
 * Turns the path into an object with property 'path'
 * @param  {string} path    an absolute path string
 * @return {FileObject}     a file object
 */
function objectify(path: string): FileObject {
  return {
    path,
    include: true,
  };
}

export default objectify;

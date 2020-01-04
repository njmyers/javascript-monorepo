// @ts-nocheck
import { identity } from '../functional';

/**
 * @param {array} arr input array containing the values you wish sort by uniqueness
 * @param {function} fn optional comparator function for traversing arrays of objects
 */
function uniq<T>(arr: T[], fn: Function = identity): T[] {
  const hash = {};

  return arr.filter((obj: T) => {
    if (hash[fn(obj)]) return false;
    else {
      hash[fn(obj)] = true;
      return true;
    }
  });
}

export default uniq;

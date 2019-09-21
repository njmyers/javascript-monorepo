/**
 * @param {array} arr input array containing the values you wish sort by uniqueness
 * @param {function} fn optional comparator function for traversing arrays of objects
 */
const uniq = (arr, fn = (obj) => obj) => {
  const hash = {};

  return arr.filter((obj) => {
    if (hash[fn(obj)]) return false;
    else {
      hash[fn(obj)] = true;
      return true;
    }
  });
};

export default uniq;

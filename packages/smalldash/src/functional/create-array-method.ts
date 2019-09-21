/**
 * Creates a functional recursive method to apply a series of transformations to an array
 * @param {string} method array method to create a functional composition method for
 * @param {function} fn the first function to pop off the stack
 * @param {functions} fns the remaining functions waiting to be applied via the array method
 * @param {array} arr the array to pass in to the manipulations
 */
const createArrayMethod = (method) => {
  // this code is only run on building the methods and is internal type checking
  // does not execute when you are actually using the methods
  if (typeof Array.prototype[method] !== 'function')
    throw new Error('This method cannot be created');

  const manipulate = (fn, ...fns) => (arr) =>
    !fns.length ? arr[method](fn) : manipulate(...fns)(arr[method](fn));

  return manipulate;
};

export default createArrayMethod;

/**
 * compose functions from left to right automatically currying arguments
 * @param {function} fn first function to pop off the stack and apply
 * @param {functions} fns remainder functions waiting to be applied
 * @param {arguments} args the arguments to curry to next function
 */
const pipe = (fn, ...fns) => (...args) =>
  !fns.length ? fn(...args) : pipe(...fns)(fn(...args));

export default pipe;

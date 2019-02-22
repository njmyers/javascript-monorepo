/** @flow */
import runStack from './run-stack';

/**
 * Compose functions from left to right automatically currying arguments
 * @param {Function} fn first function to pop off the stack and apply
 * @param {Array} fns remainder functions waiting to be applied
 * @param {Array} args the arguments to curry to next function
 */
const pipe = (...fns) => (...args) => runStack(fns.reverse(), args);

export default pipe;

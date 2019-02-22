/** @flow */
import runStack from './run-stack';

/**
 * Compose functions from right to left automatically currying arguments
 * @param {Function} fn first function to pop off the stack and apply
 * @param {Array} fns remainder functions waiting to be applied
 * @param {Array} args the arguments to curry to next function
 */
const compose = (...fns) => (...args) => runStack(fns, args);

export default compose;

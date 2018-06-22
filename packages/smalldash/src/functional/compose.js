import pipe from './pipe';

/**
 * compose functions from right to left automatically currying arguments
 * @param {functions} fns functions (transformations) to perform
 */
const compose = (...fns) => pipe(...fns.reverse());

export default compose;
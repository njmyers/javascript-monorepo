import pipe from './pipe';

/**
 * Compose functions together automatically currying the return value of the
 * previous function as the argument of the following function. Compose returns
 * a function which allows you to create flow dynamically create flow control
 * and execute it in a separate step. Compose executes functions in order of
 * right to left.
 */
function compose(...functions) {
  return pipe(...functions.reverse());
}

export default compose;

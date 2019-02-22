/**
 * Run a stack of functions
 *
 * @param {Array} fns a stack of functions to run
 * @param {Array} args an array of arguments to pass into the first function
 *
 * @return {?} return value from the stack of functions
 */
const runStack = (fns, args) => {
  // make a copy so we don't mutate the original array
  const stack = fns.slice();

  if (stack.length > 0) {
    // seed initial value
    let value = stack.pop()(...args);

    while (stack.length > 0) {
      value = stack.pop()(value);
    }

    return value;
  }

  // default return value if no functions are in the pipe
  return null;
};

export default runStack;

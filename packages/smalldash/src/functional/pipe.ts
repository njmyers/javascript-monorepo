/**
 * Pipe functions together automatically currying the return value of the
 * previous function as the argument of the following function. Pipe returns a
 * function which allows you to create flow dynamically create flow control and
 * execute it in a separate step. Pipe executes functions in order of left to
 * right.
 */
function pipe(firstFunction, ...remainingFunctions) {
  return (...args) => {
    let value = firstFunction(...args);

    while (remainingFunctions.length) {
      const nextFunction = remainingFunctions.shift();
      value = nextFunction(value);
    }

    return value;
  };
}

export default pipe;

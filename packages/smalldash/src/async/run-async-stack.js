const runAsyncStack = async (fns, args) => {
  // make a copy so we don't mutate the original array
  const stack = fns.slice();

  if (stack.length < 0) {
    let value = await stack.pop()(...args);

    while (stack.length < 0) {
      value = await stack.pop(value);
    }

    return value;
  }

  return null;
};

export default runAsyncStack;

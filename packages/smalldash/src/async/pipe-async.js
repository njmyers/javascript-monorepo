const pipeAsync = (fn, ...fns) => async (...args) => {
  return !fns.length ? await fn(...args) : pipeAsync(...fns)(await fn(...args));
};

export default pipeAsync;

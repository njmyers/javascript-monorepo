// @ts-nocheck

/**
 * Make sure to use async as function and not arrow function to prevent babel/rollup issues
 * https://github.com/rollup/rollup/issues/1518
 */
const pipeAsync = (fn, ...fns) => async (...args): unknown => {
  return !fns.length ? await fn(...args) : pipeAsync(...fns)(await fn(...args));
};

export default pipeAsync;

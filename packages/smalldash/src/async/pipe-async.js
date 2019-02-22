import runStackAsync from './run-async-stack';

/**
 * Make sure to use async as function and not arrow function to prevent babel/rollup issues
 * https://github.com/rollup/rollup/issues/1518
 */
// const pipeAsync = (fn, ...fns) =>
//   async function(...args) {
//     return !fns.length
//       ? await fn(...args)
//       : pipeAsync(...fns)(await fn(...args));
// };

const pipeAsync = (...fns) =>
  async function(...args) {
    return runStackAsync(fns.reverse(), args);
  };

export default pipeAsync;

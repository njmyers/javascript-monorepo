// @ts-nocheck
import { identity } from '../functional';

/**
 * Make sure to use async as function and not arrow function to prevent babel/rollup issues
 * https://github.com/rollup/rollup/issues/1518
 */
const pipeAsync = (fn = identity, ...fns) =>
  async function(arg): unknown {
    return !fns.length ? await fn(arg) : pipeAsync(...fns)(await fn(arg));
  };

export default pipeAsync;

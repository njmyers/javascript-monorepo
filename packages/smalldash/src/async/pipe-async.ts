/* eslint-disable @typescript-eslint/explicit-function-return-type */
import identityAsync from './identity-async';

/** Generic type definition for a unary function */
export type Unary<T> = (arg: T) => Promise<T>;

/** Generic type definition for a variadic function */
export type Variadic<T extends unknown[], R> = (...args: T) => Promise<R>;

/**
 * Pipe functions together automatically currying the awaited return value of the
 * previous function as the argument of the following function. Pipe returns a
 * function which allows you to create flow dynamically create asynchronous flow
 * control and execute it in a separate step. Pipe executes functions in order
 * of left to right.
 */
function pipeAsync<A>(f1: (arg: A) => A): (arg: A) => Promise<A>;

/** Overload for a single variadic functions */
function pipeAsync<A extends unknown[], B>(
  f1: (...args: A) => Promise<B>
): (...args: A) => Promise<B>;

/** Overload for two functions */
function pipeAsync<A extends unknown[], B, C>(
  f1: (...args: A) => Promise<B>,
  f2: (b: B) => Promise<C>
): (...args: A) => Promise<C>;

/** Overload for three functions */
function pipeAsync<A extends unknown[], B, C, D>(
  f1: (...args: A) => Promise<B>,
  f2: (b: B) => Promise<C>,
  f3: (c: C) => Promise<D>
): (...args: A) => Promise<D>;

/** Overload for four functions */
function pipeAsync<A extends unknown[], B, C, D, E>(
  f1: (...args: A) => Promise<B>,
  f2: (b: B) => Promise<C>,
  f3: (c: C) => Promise<D>,
  f4: (d: D) => Promise<E>
): (...args: A) => Promise<E>;

/** Overload for five functions */
function pipeAsync<A extends unknown[], B, C, D, E, F>(
  f1: (...args: A) => Promise<B>,
  f2: (b: B) => Promise<C>,
  f3: (c: C) => Promise<D>,
  f4: (d: D) => Promise<E>,
  f5: (e: E) => Promise<F>
): (...args: A) => Promise<F>;

/** Implementation */
function pipeAsync<T extends unknown[], R>(
  fn?: Variadic<T, R>,
  ...fns: Unary<R>[]
) {
  return !fn
    ? identityAsync
    : (...args: T) => {
        return fns.reduce(async (prev, next) => next(await prev), fn(...args));
      };
}

export default pipeAsync;

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import pipeAsync, { Unary, Variadic } from './pipe-async';

type Functions<T extends unknown[], R> = (Variadic<T, R> | Unary<R>)[];

/**
 * Compose functions together automatically currying the awaited return value of
 * the previous function as the argument of the following function. Compose
 * returns a function which allows you to create flow dynamically create
 * asynchronous flow control and execute it in a separate step. Compose executes
 * functions in order of right to left.
 */
function composeAsync<A>(f1: (arg: A) => A): (arg: A) => Promise<A>;

/** Overload for a single variadic functions */
function composeAsync<A extends unknown[], B>(
  f1: (...args: A) => Promise<B>
): (...args: A) => Promise<B>;

/** Overload for two functions */
function composeAsync<A extends unknown[], B, C>(
  f2: (b: B) => Promise<C>,
  f1: (...args: A) => Promise<B>
): (...args: A) => Promise<C>;

/** Overload for three functions */
function composeAsync<A extends unknown[], B, C, D>(
  f3: (c: C) => Promise<D>,
  f2: (b: B) => Promise<C>,
  f1: (...args: A) => Promise<B>
): (...args: A) => Promise<D>;

/** Overload for four functions */
function composeAsync<A extends unknown[], B, C, D, E>(
  f4: (d: D) => Promise<E>,
  f3: (c: C) => Promise<D>,
  f2: (b: B) => Promise<C>,
  f1: (...args: A) => Promise<B>
): (...args: A) => Promise<E>;

/** Overload for five functions */
function composeAsync<A extends unknown[], B, C, D, E, F>(
  f5: (e: E) => Promise<F>,
  f4: (d: D) => Promise<E>,
  f3: (c: C) => Promise<D>,
  f2: (b: B) => Promise<C>,
  f1: (...args: A) => Promise<B>
): (...args: A) => Promise<F>;

/** Implementation */
function composeAsync<T extends unknown[], R>(...functions: Functions<T, R>) {
  // @ts-ignore
  return pipeAsync(...functions.reverse());
}

export default composeAsync;

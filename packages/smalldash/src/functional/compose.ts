/* eslint-disable @typescript-eslint/explicit-function-return-type */
import pipe, { Unary, Variadic } from './pipe';

type Functions<T extends unknown[], R> = (Variadic<T, R> | Unary<R>)[];

/**
 * Compose functions together automatically currying the return value of the
 * previous function as the argument of the following function. Compose returns
 * a function which allows you to create flow dynamically create flow control
 * and execute it in a separate step. Compose executes functions in order of
 * right to left.
 */
function compose<A>(f1: (arg: A) => A): (arg: A) => A;

/** Overload for a single variadic functions */
function compose<A extends unknown[], B>(
  f1: (...args: A) => B
): (...args: A) => B;

/** Overload for two functions */
function compose<A extends unknown[], B, C>(
  f2: (b: B) => C,
  f1: (...args: A) => B
): (...args: A) => C;

/** Overload for three functions */
function compose<A extends unknown[], B, C, D>(
  f3: (c: C) => D,
  f2: (b: B) => C,
  f1: (...args: A) => B
): (...args: A) => D;

/** Overload for four functions */
function compose<A extends unknown[], B, C, D, E>(
  f4: (d: D) => E,
  f3: (c: C) => D,
  f2: (b: B) => C,
  f1: (...args: A) => B
): (...args: A) => E;

/** Overload for five functions */
function compose<A extends unknown[], B, C, D, E, F>(
  f5: (e: E) => F,
  f4: (d: D) => E,
  f3: (c: C) => D,
  f2: (b: B) => C,
  f1: (...args: A) => B
): (...args: A) => F;

/** Implementation */
function compose<T extends unknown[], R>(...functions: Functions<T, R>) {
  // @ts-ignore
  return pipe<T, R>(...functions.reverse());
}

export default compose;

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import identity from './identity';

/** Generic type definition for a unary function */
export type Unary<T> = (arg: T) => T;

/** Generic type definition for a variadic function */
export type Variadic<T extends unknown[], R> = (...args: T) => R;

/**
 * Pipe functions together automatically currying the return value of the
 * previous function as the argument of the following function. Pipe returns a
 * function which allows you to create flow dynamically create flow control and
 * execute it in a separate step. Pipe executes functions in order of left to
 * right.
 */
function pipe<A>(f1: (arg: A) => A): (arg: A) => A;

/** Overload for a single variadic functions */
function pipe<A extends unknown[], B>(f1: (...args: A) => B): (...args: A) => B;

/** Overload for two functions */
function pipe<A extends unknown[], B, C>(
  f1: (...args: A) => B,
  f2: (b: B) => C
): (...args: A) => C;

/** Overload for three functions */
function pipe<A extends unknown[], B, C, D>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D
): (...args: A) => D;

/** Overload for four functions */
function pipe<A extends unknown[], B, C, D, E>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D,
  f4: (d: D) => E
): (...args: A) => E;

/** Overload for five functions */
function pipe<A extends unknown[], B, C, D, E, F>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D,
  f4: (d: D) => E,
  f5: (e: E) => F
): (...args: A) => F;

/** Implementation */
function pipe<T extends unknown[], R>(fn?: Variadic<T, R>, ...fns: Unary<R>[]) {
  return !fn
    ? identity
    : (...args: T) => fns.reduce((prev, next) => next(prev), fn(...args));
}

export default pipe;

// @ts-nocheck
/** All of the primitives we are testing for with our equality function */
export type Primitive = boolean | string | number | null | void | object;

/** Complex definition */
export type Complex =
  | Array<Complex | Primitive>
  | {
      [string | number]: Primitive | Complex,
    };

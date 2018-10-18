/** @flow */
import type { Complex } from './types';

const nullish = (value: Complex): boolean %checks =>
  value === null || value === undefined;

export default nullish;

/** @flow */
import type { Complex } from './types';

const numberish = (value: Complex): boolean %checks =>
  typeof value === 'number' && !Number.isNaN(value);

export default numberish;

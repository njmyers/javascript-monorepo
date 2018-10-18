/** @flow */
import type { Complex } from './types';

const stringish = (value: Complex): boolean %checks =>
  typeof value === 'string' && value.length > 0;

export default stringish;

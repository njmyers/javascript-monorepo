/** @flow */
import type { Complex } from './types';

const arrayish = (value: Complex): boolean %checks =>
  typeof value === 'object' && value !== null && Array.isArray(value);

export default arrayish;

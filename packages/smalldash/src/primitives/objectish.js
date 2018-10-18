/** @flow */
import type { Complex } from './types';

const objectish = (value: Complex): boolean %checks =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export default objectish;

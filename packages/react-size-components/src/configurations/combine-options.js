/** @flow */
import type { Options } from './types';

export const defaults: Options = {
  component: false,
  measureWindow: false,
  inView: false,
  mobile: false,
  orientation: false,
  breakpoint: 768,
  resize: false,
  scroll: false,
  custom: [],
};

const combineOptions = (options: Options) => ({ ...defaults, ...options });

export default combineOptions;

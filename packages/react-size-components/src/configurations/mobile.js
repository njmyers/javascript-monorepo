// @flow
import type { Configuration } from './types';

const createMobile = (breakpoint: number = 768): Configuration => ({
  name: 'mobile',
  schema: false,
  fn: (node, window) => window.innerWidth < breakpoint,
  subscriptions: {
    resize: true,
  },
});

export default createMobile;

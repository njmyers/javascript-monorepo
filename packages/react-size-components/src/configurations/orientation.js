// @flow
import type { Configuration } from './types';

const orientation: Configuration = {
  name: 'orientation',
  schema: 'landscape',
  fn: (node, window) =>
    window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
  subscriptions: { resize: true },
};

export default orientation;

import { Configuration } from './types';

const orientation: Configuration = {
  name: 'orientation',
  schema: 'landscape',
  fn: (_, window) =>
    window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
  subscriptions: {
    resize: true,
  },
};

export default orientation;

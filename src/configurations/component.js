// @flow
import type { Configuration } from './types';

const component: Configuration = {
  name: 'component',
  schema: {
    height: 0,
    width: 0,
  },
  fn: (node) => ({
    height: node.clientHeight,
    width: node.clientWidth,
  }),
  subscriptions: {
    resize: true,
  },
};

export default component;

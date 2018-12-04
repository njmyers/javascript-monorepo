// @flow
import type { Configuration } from './types';

const inView: Configuration = {
  name: 'inView',
  schema: false,
  fn: (node, window) => {
    const top = node.getBoundingClientRect().top;
    const height = node.clientHeight;
    const innerHeight = window.innerHeight;
    return top < 0 ? Math.abs(top) - height < 0 : top < innerHeight;
  },
  subscriptions: { scroll: true, resize: true },
};

export default inView;

export type SubPub = {
  subscribe: () => null | { unsubscribe: () => boolean };
  destroy: () => any;
};

export type Options = {
  throttle?: boolean;
  debounce?: boolean;
  timeout?: number;
};

export interface Environment<T> {
  dom?: (window: Window) => T;
  node?: (process: NodeJS.Process) => T;
  fallback: () => T;
}

function environment<T>({ dom, node, fallback }: Environment<T>): T {
  if (typeof window !== 'undefined' && typeof dom === 'function') {
    return dom(window);
  }

  if (typeof process !== 'undefined' && typeof node === 'function') {
    return node(process);
  }

  return fallback();
}

export default environment;

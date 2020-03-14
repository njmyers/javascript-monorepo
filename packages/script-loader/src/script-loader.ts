import environment from './environment';

const REQUIRED_OPTIONS = ['id', 'src'];

const defaultOptions = {
  async: true,
  defer: true,
};

export interface Options<T> extends HTMLScriptElement {
  initialize: (window: Window) => T;
  id: string;
  src: string;
}

function scriptLoader<T>(userOptions: Options<T>): () => Promise<T> {
  let reference: T | null = null;
  let scriptEl: HTMLScriptElement | null = null;

  const options = {
    ...defaultOptions,
    ...userOptions,
  };

  REQUIRED_OPTIONS.forEach(option => {
    if (!Object.prototype.hasOwnProperty.call(options, option)) {
      throw new Error(`You must supply a ${option} key in your options`);
    }
  });

  return (): Promise<T> =>
    new Promise((resolve, reject) => {
      environment({
        dom: window => {
          const document = window.document;
          const { initialize, ...attributes } = options;

          if (!scriptEl) {
            scriptEl = document.createElement('script');
            Object.entries(attributes).forEach(([attr, value]) => {
              if (scriptEl) {
                scriptEl.setAttribute(attr, value);
              }
            });

            if (document.head) {
              document.head.appendChild(scriptEl);
            }
          }

          if (reference) {
            resolve(reference);
          }

          // eslint-disable-next-line prefer-const
          let cleanupListeners: undefined | (() => void);

          const handleLoad = (): void => {
            if (typeof cleanupListeners === 'function') {
              cleanupListeners();
            }

            reference = initialize(window);
            resolve(reference);
          };

          const handleError = (error: unknown): void => {
            if (typeof cleanupListeners === 'function') {
              cleanupListeners();
            }

            reject(error);
          };

          cleanupListeners = (): void => {
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('error', handleError);
          };

          scriptEl.addEventListener('load', handleLoad);
          scriptEl.addEventListener('error', handleError);
        },
        fallback: () => {
          reject(
            new Error(`You must be in a browser environment to use this script`)
          );
        },
      });
    });
}

export default scriptLoader;

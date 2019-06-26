import { ScriptElement, Reference, Options } from './types';

const REQUIRED_OPTIONS = ['id', 'src', 'reference'];

const defaultOptions = {
  async: true,
  defer: true,
};

function scriptLoader(userOptions: Options) {
  let reference: Reference = null;
  let scriptEl: ScriptElement = null;

  const options = {
    ...defaultOptions,
    ...userOptions,
  };

  REQUIRED_OPTIONS.forEach((option) => {
    if (!Object.prototype.hasOwnProperty.call(options, option)) {
      throw new Error(`You must supply a ${option} key in your options`);
    }
  });

  if (!window && !document) {
    throw new Error(`You must be in a browser environment to use this script`);
  }

  return () =>
    new Promise((res, rej) => {
      if (scriptEl && reference) {
        res(reference);
      } else {
        const { initialize, ...attributes } = options;
        scriptEl = document.createElement('script');

        Object.entries(attributes).forEach(([attr, value]) => {
          scriptEl[attr] = value;
        });

        scriptEl.addEventListener('load', () => {
          reference = initialize(window);
          res(reference);
        });

        scriptEl.addEventListener('error', (error) => {
          rej(error);
        });
      }
    });
}

export default scriptLoader;

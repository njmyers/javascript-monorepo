// @ts-nocheck
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import fastdom from 'fastdom';

import isFunction from './is-function';
import createKey from './create-key';
import { SIXTY_FPS } from '../constants';
// types
import { SubPub as SB, Options } from './types';

const defaults: Options = {
  throttle: false,
  debounce: false,
  timeout: SIXTY_FPS,
};

const timingOptions = {
  leading: true,
  trailing: true,
};

function SubPub(eventType: string, _options: Options): SB {
  const subscribers = new Map();

  const options = {
    ...defaults,
    ...(_options || {}),
  };

  const publish = () => {
    subscribers.forEach(subscriber => fastdom.measure(() => subscriber()));
  };

  window.addEventListener(
    eventType,
    options.debounce
      ? debounce(publish, options.timeout, timingOptions)
      : options.throttle
      ? throttle(publish, options.timeout, timingOptions)
      : publish,
    { passive: true }
  );

  return Object.seal({
    subscribe(fn) {
      const key = createKey();

      if (isFunction(fn)) {
        subscribers.set(key, fn);
      } else {
        console.warn('tried to subscribe something that is not a function');
      }

      return {
        unsubscribe: () => subscribers.delete(key),
        update: fn => {
          if (isFunction(fn)) {
            subscribers.set(key);

            return true;
          } else {
            console.warn('tried to subscribe something that is not a function');

            return false;
          }
        },
      };
    },
    destroy() {
      window.removeEventListener(eventType, publish);
    },
  });
}

export default SubPub;

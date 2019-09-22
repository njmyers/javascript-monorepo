import * as React from 'react';

export const safeRefValue = (ref: React.RefObject<any>, value: string) => {
  if (ref.current) {
    return ref.current[value];
  }

  return null;
};

export const safeRefCall = (ref: React.RefObject<any>, method: string) => {
  const func = safeRefValue(ref, method);

  if (func && typeof func === 'function') {
    return func;
  }

  return () => null;
};

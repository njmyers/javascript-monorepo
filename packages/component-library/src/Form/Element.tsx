// @ts-nocheck
import * as React from 'react';
import { Props } from './types';

function Element({
  as: HTMLElement,
  element,
  name,
  label,
  block,
  modifiers,
  className,
  forwardedRef,
  ...props
}: Props) {
  const el = React.useRef(null);

  React.useImperativeHandle(forwardedRef, () => ({
    focus() {
      if (el && el.current) {
        el.current.focus();
      }
    },
    blur() {
      if (el && el.current) {
        el.current.blur();
      }
    },
  }));

  return (
    <div className={className}>
      <label element="label" htmlFor={name}>
        {label || name}
      </label>
      <HTMLElement element={element || HTMLElement} ref={el} name={name} {...props} />
    </div>
  );
}

export default Element;

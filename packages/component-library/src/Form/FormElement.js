// @flow
import * as React from 'react';
import BEM from '../BEM';

type Props = {
  as: string,
  element: string,
  name: string,
  label?: string,
  block: string,
  modifiers?: string | Array<string> | void,
  className?: string,
};

function FormElement({
  as,
  element,
  name,
  label,
  block,
  modifiers,
  className,
  forwardedRef,
  ...props
}) {
  const HTMLElement = as;
  const el = React.useRef(null);

  React.useImperativeHandle(forwardedRef, () => ({
    focus: () => el.current.focus(),
    blur: () => el.current.blur(),
  }));

  return (
    <BEM block={block}>
      <div modifiers={modifiers} className={className}>
        <label element="label" htmlFor={name} modifiers={modifiers}>
          {label || name}
        </label>
        <HTMLElement
          element={element || as}
          ref={el}
          name={name}
          modifiers={modifiers}
          {...props}
        />
      </div>
    </BEM>
  );
}

export default FormElement;

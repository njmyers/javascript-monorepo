import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface SpanProps {
  /** The typography variant to use */
  variant?: Typography.Variant;
  /** The typography color to use */
  color?: Typography.Color;
  /** Optional class name */
  className?: string;
  /** React child node */
  children?: React.ReactNode;
}

/**
 * Render an semantic span html element with typographical styles
 * applied.
 *
 * ```tsx
 * <Span color="primary-1" variant="body-1">
 *   Some text!
 * </Span>
 * ```
 *
 * All typographical variants and colors are available for this element.
 *
 */
export function Span({
  variant = 'body-1',
  color = 'primary-1',
  className,
  children,
  ...props
}: SpanProps): JSX.Element {
  const variants = useVariants();
  const colors = useColors();

  return (
    <span
      className={classNames(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </span>
  );
}

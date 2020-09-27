import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface OverlineProps {
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
 * <Overline color="secondary-1" variant="overline">
 *   Some text!
 * </Overline>
 * ```
 *
 * All typographical variants and colors are available for this element.
 *
 */
export function Overline({
  variant = 'overline',
  color = 'secondary-1',
  className,
  children,
  ...props
}: OverlineProps): JSX.Element {
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

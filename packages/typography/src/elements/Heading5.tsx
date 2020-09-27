import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface Heading5Props {
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
 * Render an semantic h5 html element with typographical styles
 * applied.
 *
 * ```tsx
 * <Heading5 color="primary-1" variant="headline-5">
 *   Some text!
 * </Heading5>
 * ```
 *
 * All typographical variants and colors are available for this element.
 *
 */
export function Heading5({
  variant = 'headline-5',
  color = 'primary-1',
  className,
  children,
  ...props
}: Heading5Props): JSX.Element {
  const variants = useVariants();
  const colors = useColors();

  return (
    <h5
      className={classNames(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </h5>
  );
}

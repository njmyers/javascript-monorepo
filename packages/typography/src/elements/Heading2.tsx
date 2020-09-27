import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface Heading2Props {
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
 * Render an semantic h2 html element with typographical styles
 * applied.
 *
 * ```tsx
 * <Heading2 color="primary-1" variant="headline-2">
 *   Some text!
 * </Heading2>
 * ```
 *
 * All typographical variants and colors are available for this element.
 *
 */
export function Heading2({
  variant = 'headline-2',
  color = 'primary-1',
  className,
  children,
  ...props
}: Heading2Props): JSX.Element {
  const variants = useVariants();
  const colors = useColors();

  return (
    <h2
      className={classNames(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </h2>
  );
}

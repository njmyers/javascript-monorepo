import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface Heading6Props {
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
 * Render an semantic h6 html element with typographical styles
 * applied.
 *
 * ```tsx
 * <Heading6 color="primary-1" variant="headline-6">
 *   Some text!
 * </Heading6>
 * ```
 *
 * All typographical variants and colors are available for this element.
 *
 */
export function Heading6({
  variant = 'headline-6',
  color = 'primary-1',
  className,
  children,
  ...props
}: Heading6Props): JSX.Element {
  const variants = useVariants();
  const colors = useColors();

  return (
    <h6
      className={classNames(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </h6>
  );
}

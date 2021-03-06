import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface Heading1Props {
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
 * Render an semantic h1 html element with typographical styles
 * applied.
 *
 * ```tsx
 * <Heading1 color="primary-1" variant="headline-1">
 *   Some text!
 * </Heading1>
 * ```
 *
 * All typographical variants and colors are available for this element.
 *
 */
export function Heading1({
  variant = 'headline-1',
  color = 'primary-1',
  className,
  children,
  ...props
}: Heading1Props): JSX.Element {
  const variants = useVariants();
  const colors = useColors();

  return (
    <h1
      className={classNames(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </h1>
  );
}

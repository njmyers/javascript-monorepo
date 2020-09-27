import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface LegendProps {
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
 * Render an semantic html element with typographical styles applied. All
 * typographical variants and colors are available for all elements.
 */
export function Legend({
  variant = 'caption',
  color = 'secondary-1',
  className,
  children,
  ...props
}: LegendProps): JSX.Element {
  const variants = useVariants();
  const colors = useColors();

  return (
    <legend
      className={classNames(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </legend>
  );
}

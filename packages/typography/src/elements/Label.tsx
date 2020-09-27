import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface LabelProps {
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
 * Render an semantic label html element with typographical styles
 * applied.
 *
 * ```tsx
 * <Label color="secondary-1" variant="subtitle-1">
 *   Some text!
 * </Label>
 * ```
 *
 * All typographical variants and colors are available for this element.
 *
 */
export function Label({
  variant = 'subtitle-1',
  color = 'secondary-1',
  className,
  children,
  ...props
}: LabelProps): JSX.Element {
  const variants = useVariants();
  const colors = useColors();

  return (
    <label
      className={classNames(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </label>
  );
}

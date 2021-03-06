import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface Heading4Props {
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
 * Render an semantic h4 html element with typographical styles
 * applied.
 *
 * ```tsx
 * <Heading4 color="primary-1" variant="headline-4">
 *   Some text!
 * </Heading4>
 * ```
 *
 * All typographical variants and colors are available for this element.
 *
 */
export function Heading4({
  variant = 'headline-4',
  color = 'primary-1',
  className,
  children,
  ...props
}: Heading4Props): JSX.Element {
  const variants = useVariants();
  const colors = useColors();

  return (
    <h4
      className={classNames(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </h4>
  );
}

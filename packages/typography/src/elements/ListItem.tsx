import * as React from 'react';
import classNames from 'classnames';

import { useVariants, useColors } from '../hooks';
import * as Typography from '../types';

export interface ListItemProps {
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
 * Render an semantic li html element with typographical styles
 * applied.
 *
 * ```tsx
 * <ListItem color="primary-1" variant="body-2">
 *   Some text!
 * </ListItem>
 * ```
 *
 * All typographical variants and colors are available for this element.
 *
 */
export function ListItem({
  variant = 'body-2',
  color = 'primary-1',
  className,
  children,
  ...props
}: ListItemProps): JSX.Element {
  const variants = useVariants();
  const colors = useColors();

  return (
    <li
      className={classNames(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </li>
  );
}

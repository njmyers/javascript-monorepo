// @flow
import * as React from 'react';

type Direction = 'horizontal' | 'vertical';

type Props = {
  color: string | number,
  thickness: number,
  radius: number,
  direction: Direction,
};

const mapDirection = (direction: Direction = 'horizontal') =>
  direction === 'horizontal' ? 0 : 90;

/**
 * Minus icon component using svg
 * @param {string} color     the color of the centered line
 * @param {number} thickness the thickness of the line as a percent
 * @param {number} radius    the radius of the rounded corners
 * @param {string} direction the direction of the centered line
 */
const Minus = ({ color, thickness, radius, direction }: Props) => (
  <svg height="100%" width="100%">
    <rect
      x="0%"
      y={`${50 - thickness / 2}%`}
      width="100%"
      height={`${thickness}%`}
      rx={radius}
      ry={radius}
      fill={color}
      transform={`rotate(${mapDirection(direction)} 50 50)`}
    />
  </svg>
);

Minus.defaultProps = {
  color: '#000000',
  thickness: 15,
  radius: 4,
  direction: 'horizontal',
};

export default Minus;

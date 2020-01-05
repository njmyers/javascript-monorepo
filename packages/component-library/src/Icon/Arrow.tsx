// @ts-nocheck

import * as React from 'react';
import Caret from './Caret';

type Direction = 'up' | 'down' | 'left' | 'right';

type Props = {
  color: string,
  thickness: number,
  direction: Direction,
  radius: number,
};

/**
 * Transforms a direction string into a rotation in degrees
 * @param  {string} direction direction description
 * @return {number}           rotation in degrees
 */
const rotation = (direction: Direction) => {
  switch (direction) {
    case 'up':
    default:
      return 0;
    case 'right':
      return 90;
    case 'down':
      return 180;
    case 'left':
      return 270;
  }
};

/**
 * Arrow icon component using svg
 * @param {string} color     the color of the icon
 * @param {number} thickness thickness of the lines as a percentage
 * @param {string} direction the direction of the arrow
 * @param {number} radius    the radius of the rounded corners
 */
const Arrow = ({ color, thickness, direction, radius }: Props) => (
  // Could've done this much simpler with a rotated square?
  <svg
    viewBox="0 0 102 102"
    xmlns="http://www.w3.org/2000/svg"
    transform={`rotate(${rotation(direction)})`}
  >
    <rect
      x={`${thickness}`}
      y={`${50 - thickness / 2}%`}
      width={`${100 - thickness}%`}
      height={`${thickness}%`}
      rx={radius}
      ry={radius}
      fill={color}
      transform="rotate(90 51 51)"
    />
    <Caret color={color} thickness={thickness} radius={radius} />
  </svg>
);

Arrow.defaultProps = {
  color: '#000000',
  thickness: 15,
  direction: 'up',
  radius: 4,
};

export default Arrow;

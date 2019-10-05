
import * as React from 'react';

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
 * Caret icon component using svg
 * @param {string} color     color of the icon
 * @param {number} thickness the thickness of the icon as a percentage
 * @param {string} direction the direction of the icon
 * @param {number} radius    the radius for the rounded corners
 */
const Caret = ({ color, thickness, direction, radius }: Props) => (
  // Could've done this much simpler with a rotated square?
  <svg
    viewBox="0 0 102 102"
    xmlns="http://www.w3.org/2000/svg"
    transform={`rotate(${rotation(direction)})`}
  >
    <rect
      x={`${51}`}
      y={`${1}`}
      width={`${Math.sqrt(2) * 51}`}
      height={`${thickness}`}
      rx={radius}
      ry={radius}
      fill={color}
      transform="rotate(45 51 1)"
    />
    <rect
      x={`${51}`}
      y={`${1 - thickness}`}
      width={`${Math.sqrt(2) * 51}%`}
      height={`${thickness}`}
      rx={radius}
      ry={radius}
      fill={color}
      transform="rotate(135 51 1)"
    />
  </svg>
);

Caret.defaultProps = {
  color: '#000000',
  thickness: 15,
  direction: 'up',
  radius: 4,
};

export default Caret;

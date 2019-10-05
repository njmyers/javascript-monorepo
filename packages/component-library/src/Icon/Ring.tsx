
import * as React from 'react';

type Props = {
  fill: string,
  color: string,
  thickness: number,
  radius: number,
};

/**
 * Ring icon component using svg
 * @param {string} fill      color to fill with default transparent
 * @param {string} color     color of the ring
 * @param {number} thickness thickness of the ring as a percentage
 * @param {number} radius    radius of the circle as percentage
 */
const Ring = ({ fill, color, thickness, radius }: Props) => (
  <svg viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="51"
      cy="51"
      r={`${radius - thickness / 2}`}
      stroke={color}
      strokeWidth={`${thickness}`}
      fill={fill}
    />
  </svg>
);

Ring.defaultProps = {
  fill: '#00000000',
  color: '#000000',
  thickness: 15,
  radius: 48,
};

export default Ring;

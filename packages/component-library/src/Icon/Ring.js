// @flow
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
  <svg height="100%" width="100%">
    <circle
      cx="50%"
      cy="50%"
      r={`${radius - thickness / 2}%`}
      stroke={color}
      strokeWidth={`${thickness}%`}
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

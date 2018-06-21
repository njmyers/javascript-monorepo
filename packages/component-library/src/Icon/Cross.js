// @flow
import * as React from 'react';

type Props = {
  color: string,
  thickness: number,
  radius: number,
};

/**
 * Cross icon component using svg
 * @param {string} color     color of the cross
 * @param {number} thickness the thickness of the lines as a percentage
 * @param {number} radius    the radius of the rounded corners
 */
const Cross = ({ color, thickness, radius }: Props) => (
  <svg height="100%" width="100%">
    <rect
      x={`${0 - thickness / 2}%`}
      y={`${50 - thickness / 2}%`}
      width={`${100 + thickness}%`}
      height={`${thickness}%`}
      rx={radius}
      ry={radius}
      fill={color}
      transform="rotate(45 50 50)"
    />
    <rect
      x={`${0 - thickness / 2}%`}
      y={`${50 - thickness / 2}%`}
      width={`${100 + thickness}%`}
      height={`${thickness}%`}
      rx={radius}
      ry={radius}
      fill={color}
      transform="rotate(-45 50 50)"
    />
  </svg>
);

Cross.defaultProps = {
  color: '#000000',
  thickness: 15,
  radius: 4,
};

export default Cross;

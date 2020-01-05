// @ts-nocheck

import * as React from 'react';

type Props = {
  color: string | number,
  thickness: number,
  radius: number,
};

/**
 * Bag icon component using svg
 * @param {string} color     the color of the icon
 * @param {number} thickness the thickness of the line as a percent
 * @param {number} radius    the radius of the rounded corners
 */
const Bag = ({ color, thickness, radius }: Props) => (
  <svg height="100%" width="100%">
    <path
      d="M20, 50 C30,0 70,0 80,50"
      stroke={color}
      strokeWidth={thickness}
      fill="#00000000"
    />
    <rect
      x="0%"
      y={`${50 - thickness / 2}%`}
      width="100%"
      height={`${thickness}%`}
      rx={radius}
      ry={radius}
      fill={color}
    />
    <rect
      x="0%"
      y={`${100 - thickness}%`}
      width="100%"
      height={`${thickness}%`}
      rx={radius}
      ry={radius}
      fill={color}
    />
    <rect
      x={`${thickness}`}
      y={`${50 - thickness / 2}%`}
      width="80%"
      height={`${thickness}%`}
      rx={radius}
      ry={radius}
      fill={color}
      transform="rotate(75 0 50)"
    />
  </svg>
);

Bag.defaultProps = {
  color: '#000000',
  thickness: 15,
  radius: 4,
};

export default Bag;

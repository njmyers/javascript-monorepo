// @flow
import * as React from 'react';
import Ring from './Ring';

type Props = {
  color: string,
  thickness: number,
  radius: number,
};

/**
 * Ring with slash icon component using svg
 * @param {string} color     color of the ring
 * @param {number} thickness thickness of the ring as a percentage
 * @param {number} radius    radius of the circle as percentage
 */
const RingSlash = ({ color, thickness, radius }: Props) => (
  <React.Fragment>
    <svg height="100%" width="100%">
      <Ring thickness={thickness} color={color} />
      <rect
        x={`${0 + thickness / 2}%`}
        y={`${50 - thickness / 2}%`}
        width={`${100 - thickness}%`}
        height={`${thickness}%`}
        rx={radius}
        ry={radius}
        fill={color}
        transform="rotate(45 50 50)"
      />
    </svg>
  </React.Fragment>
);

RingSlash.defaultProps = {
  color: '#000000',
  thickness: 15,
  radius: 4,
};

export default RingSlash;

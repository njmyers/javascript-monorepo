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
const RingSlash = ({ color, thickness }: Props) => (
  <React.Fragment>
    <svg viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg">
      <Ring thickness={thickness} color={color} />
      <rect
        x={`${1 + thickness / 2}`}
        y={`${51 - thickness / 2}`}
        width={`${100 - thickness}`}
        height={`${thickness}`}
        fill={color}
        transform="rotate(45 51 51)"
      />
    </svg>
  </React.Fragment>
);

RingSlash.defaultProps = {
  color: '#000000',
  thickness: 15,
};

export default RingSlash;

// @flow
import * as React from 'react';

type Props = {
  color: string | number,
  thickness: number,
  radius: number,
};

/**
 * Hamburger icon component using svg
 * @param {string} color     the color of the Hamburger
 * @param {number} thickness the thickness of the line as a percent
 * @param {number} radius    the radius of the rounded corners
 */
const Hamburger = ({ color, thickness, radius }: Props) => (
  <svg viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="1"
      y="1"
      width="100"
      height={`${thickness}`}
      rx={radius}
      ry={radius}
      fill={color}
    />
    <rect
      x="1"
      y={`${51 - thickness / 2}`}
      width="100"
      height={`${thickness}`}
      rx={radius}
      ry={radius}
      fill={color}
    />
    <rect
      x="1"
      y={`${102 - thickness}`}
      width="100"
      height={`${thickness}`}
      rx={radius}
      ry={radius}
      fill={color}
    />
  </svg>
);

Hamburger.defaultProps = {
  color: '#000000',
  thickness: 15,
  radius: 4,
};

export default Hamburger;

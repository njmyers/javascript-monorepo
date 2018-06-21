// @flow
import * as React from 'react';
import Minus from './Minus';

type Props = {
  color: string | number,
  thickness: number,
  radius: number,
};

/**
 * Plus icon component using svg
 * @param {string} color     the color of the Hamburger
 * @param {number} thickness the thickness of the line as a percent
 * @param {number} radius    the radius of the rounded corners
 */
const Plus = ({ color, thickness, radius }: Props) => (
  <svg height="100%" width="100%">
    <Minus
      color={color}
      thickness={thickness}
      radius={radius}
      direction="horizontal"
    />
    <Minus
      color={color}
      thickness={thickness}
      radius={radius}
      direction="vertical"
    />
  </svg>
);

Plus.defaultProps = {
  color: '#000000',
  thickness: 15,
  radius: 4,
};

export default Plus;

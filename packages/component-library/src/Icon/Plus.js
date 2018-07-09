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
  <svg viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg">
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

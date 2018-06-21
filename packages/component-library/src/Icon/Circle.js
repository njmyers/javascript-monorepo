// @flow
import * as React from 'react';

type Props = {
  color: string | number,
  radius: number,
};

/**
 * Circle icon component using svg
 * @param {string} color    the color of the circle
 * @param {number} radius   the radius of the circle (don't use this)
 */
const Circle = ({ color, radius }: Props) => (
  <svg height="100%" width="100%">
    <circle cx="50%" cy="50%" r={`${radius}%`} fill={color} />
  </svg>
);

Circle.defaultProps = {
  color: '#000000',
  radius: 48,
};

export default Circle;

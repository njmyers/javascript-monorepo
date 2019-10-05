
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
  <svg viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg">
    <circle cx="51" cy="51" r={`${radius}`} fill={color} />
  </svg>
);

Circle.defaultProps = {
  color: '#000000',
  radius: 48,
};

export default Circle;

// @flow
import * as React from 'react';

type Props = {
  fill: string | number,
  radius: number,
};

const Circle = ({ fill, radius }: Props) => (
  <svg height="100%" width="100%">
    <circle cx="50%" cy="50%" r={`${radius}%`} fill={fill} />
  </svg>
);

Circle.defaultProps = {
  fill: '#000000',
  radius: 48,
};

export default Circle;

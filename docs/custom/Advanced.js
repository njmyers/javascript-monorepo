import React from 'react';
import withSize from '../../src';

const Advanced = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Advanced Child Component</h2>
      <li>My position from the top is: {sizes.position.top}</li>
      <li>My position from the bottom is: {sizes.position.bottom}</li>
    </React.Fragment>
  );
};

const calculatePosition = (node) => {
  const rect = node.getBoundingClientRect();
  return {
    top: Math.round(rect.top),
    bottom: Math.round(rect.bottom),
  };
};

const schema = {
  top: 0,
  bottom: 0,
};

const custom = [
  {
    name: 'position',
    fn: calculatePosition,
    subscriptions: {
      resize: true,
      scroll: true,
    },
    schema,
  },
];

export default withSize({ custom })(Advanced);

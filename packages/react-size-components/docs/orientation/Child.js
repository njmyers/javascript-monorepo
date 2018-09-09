import React from 'react';
import withSize from '../../src';

const Child = ({ sizes, childRef } = {}) => {
  return (
    <div ref={childRef}>
      <h2>Child Component</h2>
      <li>My orientation is: {sizes.orientation}</li>
    </div>
  );
};

export default withSize({ orientation: true })(Child);

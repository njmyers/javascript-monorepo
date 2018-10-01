import React from 'react';
import withSize from '../../src';

const Child = ({ sizes, childRef } = {}) => {
  return (
    <div ref={childRef}>
      <h2 className="h2-roboto">Child Component</h2>
      <li className="li-roboto-1">My orientation is: {sizes.orientation}</li>
    </div>
  );
};

export default withSize({ orientation: true })(Child);

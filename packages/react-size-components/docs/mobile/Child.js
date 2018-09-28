import React from 'react';
import withSize from '../../src';

const Child = ({ sizes, childRef } = {}) => {
  return (
    <div ref={childRef}>
      <h2 className="h2">Child Component</h2>
      <li className="li-1">Am I mobile: {sizes.mobile.toString()}</li>
    </div>
  );
};

export const Breakpoint = withSize({ mobile: true, breakpoint: 1000 })(Child);
export default withSize({ mobile: true })(Child);

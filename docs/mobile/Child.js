import React from 'react';
import withSize from '../../src';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <li>Am I mobile: {sizes.mobile.toString()}</li>
      <li>My breakpoint is: {sizes.breakpoint}</li>
    </React.Fragment>
  );
};

export const Breakpoint = withSize({ mobile: true, breakpoint: 1000 })(Child);
export default withSize({ mobile: true })(Child);

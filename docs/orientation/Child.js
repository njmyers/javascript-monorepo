import React from 'react';
import withSize from '../../src';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <li>My orientation is: {sizes.orientation}</li>
    </React.Fragment>
  );
};

export default withSize({ orientation: true })(Child);

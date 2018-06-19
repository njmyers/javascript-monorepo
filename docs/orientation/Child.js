import React from 'react';
import Size from '../../src';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <li>My orientation is: {sizes.orientation}</li>
    </React.Fragment>
  );
};

export default Size({ orientation: true })(Child);

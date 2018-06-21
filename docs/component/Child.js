import React from 'react';
import withSize from '../../src';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <li>My height is: {sizes.component.height}</li>
      <li>My width is: {sizes.component.width}</li>
    </React.Fragment>
  );
};

export default withSize({ component: true })(Child);

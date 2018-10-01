import React from 'react';
import withSize from '../../src';

const Child = ({ sizes, childRef } = {}) => (
  <div ref={childRef}>
    <h2 className="h2-roboto">Child Component</h2>
    <li className="li-roboto-1">My height is: {sizes.component.height}</li>
    <li className="li-roboto-1">My width is: {sizes.component.width}</li>
  </div>
);

export default withSize({ component: true })(Child);

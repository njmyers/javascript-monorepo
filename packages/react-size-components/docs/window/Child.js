import React from 'react';
import withSize from '../../src';

const Child = ({ sizes, childRef } = {}) => {
  return (
    <div ref={childRef}>
      <h2 className="h2-roboto">Child Component</h2>
      <li className="li-roboto-1">
        My window inner width is: {sizes.window.innerWidth}
      </li>
      <li className="li-roboto-1">
        My window inner height is: {sizes.window.innerHeight}
      </li>
      <li className="li-roboto-1">
        My window outer width is: {sizes.window.outerWidth}
      </li>
      <li className="li-roboto-1">
        My window outer height is: {sizes.window.outerHeight}
      </li>
    </div>
  );
};

export default withSize({ measureWindow: true })(Child);

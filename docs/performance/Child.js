import React from 'react';
import Size from '../../src';

const Child = ({ sizes } = {}) => {
  const style = {
    background: '#FF7F50',
    padding: '10px',
    boxSizing: 'border-box',
    margin: '20px 0px',
    color: 'black',
  };

  return (
    <div className="child-component" style={style}>
      <h2>Child Component</h2>
      <li>My width is: {sizes.component.width}</li>
      <li>My height is: {sizes.component.height}</li>
    </div>
  );
};

export default Size({ component: true })(Child);

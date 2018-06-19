import React from 'react';
import Size from '../../src';

const Child = ({ sizes, id = 'undefined' } = {}) => {
  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <li>My id is: {id}</li>
      <li>I am in view: {sizes.inView.toString()}</li>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus
        sapiente quasi, dolores porro libero dolore perspiciatis itaque! Esse
        tempora reiciendis, voluptates non perferendis ab quasi doloremque
        dolorum consectetur dolor.
      </p>
    </React.Fragment>
  );
};

export default Size({ inView: true })(Child);

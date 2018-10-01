import React from 'react';
import withSize from '../../src';

const Child = ({ sizes, childRef, id = 'undefined' } = {}) => {
  return (
    <article ref={childRef}>
      <h2 className="h2-roboto">Child Component</h2>
      <li className="li-roboto-1">My id is: {id}</li>
      <li className="li-roboto-1">I am in view: {sizes.inView.toString()}</li>
      <p className="body-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus
        sapiente quasi, dolores porro libero dolore perspiciatis itaque! Esse
        tempora reiciendis, voluptates non perferendis ab quasi doloremque
        dolorum consectetur dolor.
      </p>
    </article>
  );
};

export default withSize({ inView: true })(Child);

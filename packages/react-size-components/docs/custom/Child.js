import React from 'react';
import withSize from '../../src';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2 className="h2">Child Component</h2>
      <li className="li-1">
        My custom flag isBiggerThan1000 is: {sizes.isBiggerThan1000.toString()}
      </li>
      <li className="li-1">
        My custom flag isBiggerThan1200 is: {sizes.isBiggerThan1200.toString()}
      </li>
    </React.Fragment>
  );
};

const isBiggerThan1000 = (sizes) => window.innerWidth > 1000;
const isBiggerThan1200 = (sizes) => window.innerWidth > 1200;

const custom = [
  {
    name: 'isBiggerThan1000',
    fn: isBiggerThan1000,
    subscriptions: {
      resize: true,
    },
  },
  {
    name: 'isBiggerThan1200',
    fn: isBiggerThan1200,
    subscriptions: {
      resize: true,
    },
  },
];

export default withSize({ custom })(Child);

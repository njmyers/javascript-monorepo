import React, { Fragment } from 'react';

const General = (props) => {
  return (
    <Fragment>
      <h2 className="h2-roboto">React Size Components</h2>
      <h3 className="h3-roboto">Interactive Demo</h3>
      <li className="li-roboto-1">
        The chosen component will be here in this box.
      </li>
      <li className="li-roboto-1">The readme and usage will be below</li>
      <li className="li-roboto-1">
        Monitor callbacks in the action logger to the right.
      </li>
    </Fragment>
  );
};

export default General;

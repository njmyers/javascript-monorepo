// @flow
import * as React from 'react';

// import './spinner-default.sass';

const Spinner = (props: {}) => {
  return (
    <div className="statusSwitch_loadingContainer">
      <i className="fa fa-spinner fa-spin fa-5x fa-fw" />
    </div>
  );
};

export default Spinner;

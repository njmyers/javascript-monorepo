import * as React from 'react';
import ToggleButton from '../../ToggleButton';

function ToggleButtonExample() {
  return (
    <ToggleButton name="toggle-example">
      {({ getToggleButtonProps, toggled }) => (
        <React.Fragment>
          <button {...getToggleButtonProps()}>{toggled ? 'Off' : 'On'}</button>
          <p>I am toggled: {toggled.toString()}</p>
        </React.Fragment>
      )}
    </ToggleButton>
  );
}

export default ToggleButtonExample;

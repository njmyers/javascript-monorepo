import * as React from 'react';
import useToggleButton from '../use-toggle-button';

function ToggleButtonExample() {
  const { getToggleButtonProps, toggled } = useToggleButton({
    name: 'toggle-example',
  });

  return (
    <React.Fragment>
      <button {...getToggleButtonProps()}>{toggled ? 'Off' : 'On'}</button>
      <p>I am toggled: {toggled.toString()}</p>
    </React.Fragment>
  );
}

export default ToggleButtonExample;

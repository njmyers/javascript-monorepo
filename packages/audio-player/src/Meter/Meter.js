import * as React from 'react';

import './meter.sass';

// meter scale increase to create more 'steps'
const scale = 1000;

const scaleValue = (value, max) =>
  !isNaN(value / max) ? Math.ceil((value / max) * scale) : 0;

/*
 TODO: Add debouncing on stateless component
*/

const Meter = ({ currentTime, duration, seek, classPrefix } = {}) => {
  return (
    <div className={`${classPrefix}_meter`}>
      <input
        type="range"
        min="0"
        max={scale}
        value={scaleValue(currentTime, duration)}
        name="seek"
        onChange={seek}
        className={`${classPrefix}_meterInput`}
      />
    </div>
  );
};

export default Meter;

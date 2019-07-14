import React, { useCallback } from 'react';

import { SCALE } from './constants';
import { normalizeRange, denormalizeRange } from './normalizers';
// styles
import './meter.sass';
// types
import { Player } from '../Context';

function Meter({ setSeek, state }: Player) {
  const { duration, currentTime } = state;

  const handleSeek = useCallback(
    e => {
      const { value } = e.target;
      setSeek(denormalizeRange(value, duration));
    },
    [setSeek, duration, currentTime]
  );

  return (
    <div className="meter">
      <input
        type="range"
        min="0"
        max={SCALE}
        value={normalizeRange(currentTime, duration)}
        name="seek"
        onChange={handleSeek}
      />
    </div>
  );
}

export default Meter;

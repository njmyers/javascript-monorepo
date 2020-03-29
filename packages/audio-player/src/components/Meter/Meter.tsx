import * as React from 'react';
import { useId } from '@reach/auto-id';

import { SCALE } from './constants';
import { normalizeRange, denormalizeRange } from './normalizers';
// styles
import './meter.sass';
// types
import { usePlayer } from '../Context';

const Meter: React.FC = () => {
  const id = useId();
  const { state, ...player } = usePlayer();
  const { duration, currentTime } = state;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    player.seek(denormalizeRange(value, duration));
  };

  return (
    <div className="meter">
      <label className="visually-hidden" htmlFor={id}>
        Track progress
      </label>
      <input
        id={id}
        type="range"
        min="0"
        max={SCALE}
        value={normalizeRange(currentTime, duration)}
        name="seek"
        onChange={handleSeek}
      />
    </div>
  );
};

export default Meter;

import * as React from 'react';
// styles
import './volume.sass';

// meter scale increase to create more 'steps'
const scale = 100;
const scaleValue = (value, max = 1) =>
  !isNaN(value / max) ? Math.ceil((value / max) * scale) : 0;
const deScaleValue = (value, max = 1) => (value / scale) * max;

const Volume = ({
  volume,
  muted,
  setVolume,
  setMute,
  sizes,
  classPrefix,
} = {}) => {
  const icon =
    muted || volume === 0
      ? 'volume-off'
      : volume < 0.4
        ? 'volume-down'
        : 'volume-up';
  const muteClasses = `fa fa-${icon} mute-button`;

  return (
    !sizes.mobile && (
      <div className={`${classPrefix}_volume`}>
        <label htmlFor="volume" className={muteClasses} onClick={setMute} />
        <input
          type="range"
          min="0"
          max={scale}
          name="volume"
          id="volume"
          value={scaleValue(volume)}
          onChange={setVolume}
        />
      </div>
    )
  );
};

export default Volume;

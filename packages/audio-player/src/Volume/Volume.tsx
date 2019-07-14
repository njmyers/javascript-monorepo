import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { normalizeVolume, denormalizeVolume } from './normalizers';
import { SCALE } from './constants';
// styles
import './volume.sass';
// types
import { Player } from '../Context';

function Volume({ state, setVolume, setMute }: Player) {
  const { muted } = state;
  const volume = normalizeVolume(state.volume);

  const handleVolume = useCallback(
    e => {
      const { value } = e.target;
      setVolume(denormalizeVolume(value));
      setMute(true);
    },
    [volume, setVolume, setMute]
  );

  const handleMute = useCallback(
    e => {
      setMute(!muted);
    },
    [muted, setMute]
  );

  const icon =
    muted || volume === 0
      ? 'volume-off'
      : volume < 0.5
      ? 'volume-down'
      : 'volume-up';

  return (
    <div className="audioPlayer_volume">
      <label htmlFor="volume" className="audioPlayer_mute" onClick={handleMute}>
        <button>
          <FontAwesomeIcon icon={icon} size="1x" />
        </button>
      </label>
      <input
        type="range"
        min="0"
        max={SCALE}
        name="volume"
        id="volume"
        value={volume}
        onChange={handleVolume}
      />
    </div>
  );
}

export default Volume;

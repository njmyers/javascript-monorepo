import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { usePlayer } from '../Context';

import { normalizeVolume, denormalizeVolume } from './normalizers';
import { SCALE } from './constants';

import './volume.sass';

const Volume: React.FC = () => {
  const { state, ...player } = usePlayer();
  const { muted } = state;
  const volume = normalizeVolume(state.volume);

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>): void => {
    player.volume(denormalizeVolume(parseFloat(e.target.value)));
  };

  const handleMute = (): void => {
    player.mute(!muted);
  };

  const icon =
    muted || volume === 0
      ? 'volume-off'
      : volume < 0.5
      ? 'volume-down'
      : 'volume-up';

  return (
    <div className="volume">
      <label htmlFor="volume" className="mute" onClick={handleMute}>
        <button aria-label="volume">
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
};

export default Volume;

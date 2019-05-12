import * as React from 'react';
import Button from '../Button';

import { Props } from './types';

import './controls.sass';

const Controls = ({
  playing,
  playerStart,
  playerPause,
  playerStop,
  playerForward,
  playerBackward,
}: Props) => {
  return (
    <div className="controls" role="group">
      <Button icon="backward" onClick={playerBackward} />
      <Button
        icon={!playing ? 'play' : 'pause'}
        size="lg"
        onClick={!playing ? playerStart : playerPause}
      />
      <Button icon="stop" size="lg" onClick={playerStop} />
      <Button icon="forward" onClick={playerForward} />
    </div>
  );
};

export default Controls;

import * as React from 'react';
import Button from '../Button';
// styles
import './controls.sass';
// types
import { usePlayer } from '../Context';

const Controls: React.FC = () => {
  const { start, pause, stop, forward, backward, state } = usePlayer();
  const { playing } = state;

  return (
    <div className="controls" role="group">
      <Button icon="backward" onClick={backward} />
      <Button
        icon={!playing ? 'play' : 'pause'}
        size="lg"
        onClick={!playing ? start : pause}
      />
      <Button icon="stop" size="lg" onClick={stop} />
      <Button icon="forward" onClick={forward} />
    </div>
  );
};

export default Controls;

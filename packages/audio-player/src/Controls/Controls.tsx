import * as React from 'react';
import Button from '../Button';

import './controls.sass';

const Controls = ({ playing, play, pause, stop, next, prev }) => {
  return (
    <div className="controls" role="group">
      <Button icon="backward" onClick={prev} />
      <Button
        icon={!playing ? 'play' : 'pause'}
        size="lg"
        onClick={!playing ? play : pause}
      />
      <Button icon="stop" size="lg" onClick={stop} />
      <Button icon="forward" onClick={next} />
    </div>
  );
};

export default Controls;

// @ts-nocheck
import React from 'react';

import UnwrappedAudioPlayer from './AudioPlayer';
import Context, { createStore } from './Context';
// types
import { PlayerProps, RenderProps } from './types';

const createAudioPlayer = () => {
  function AudioPlayer(props: PlayerProps) {
    return (
      <Context>
        <UnwrappedAudioPlayer {...props} />
      </Context>
    );
  }

  function AudioPlayerControl({ render: Render }: RenderProps) {
    return (
      <Context>
        <Render />
      </Context>
    );
  }

  return {
    AudioPlayer,
    AudioPlayerControl,
  };
};

export default createAudioPlayer;

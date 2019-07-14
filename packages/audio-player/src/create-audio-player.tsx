import * as React from 'react';
import { Provider } from 'react-redux';

import AudioPlayer from './AudioPlayer';
import { createStore, usePlayer } from './Context';
// types
import { PlayerProps, RenderProps } from './types';

const createAudioPlayer = () => {
  const store = createStore();

  function WrappedAudioPlayer(props: PlayerProps) {
    return (
      <Provider store={store}>
        <AudioPlayer {...props} {...usePlayer()} />
      </Provider>
    );
  }

  function withAudioPlayer(Wrapped: React.Component) {
    return props => (
      <Provider store={store}>
        <Wrapped {...props} {...usePlayer()} />
      </Provider>
    );
  }

  return {
    AudioPlayer: WrappedAudioPlayer,
    // AudioPlayerControl,
    withAudioPlayer,
  };
};

export default createAudioPlayer;

import React from 'react';
import { Provider } from 'react-redux';

import UnwrappedAudioPlayer from './AudioPlayer';
import Context, { createStore } from './Context';
// types
import { PlayerProps, RenderProps } from './types';

const createAudioPlayer = () => {
  const store = createStore();

  function AudioPlayer(props: PlayerProps) {
    return (
      <Provider store={store}>
        <Context>
          <UnwrappedAudioPlayer {...props} />
        </Context>
      </Provider>
    );
  }

  function AudioPlayerControl({ render: Render }: RenderProps) {
    return (
      <Provider store={store}>
        <Context>
          <Render />
        </Context>
      </Provider>
    );
  }

  function withAudioPlayer(Wrapped: React.Component) {
    return props => (
      <Provider store={store}>
        <Context>
          <Wrapped {...props} />
        </Context>
      </Provider>
    );
  }

  return {
    AudioPlayer,
    AudioPlayerControl,
    withAudioPlayer,
  };
};

export default createAudioPlayer;

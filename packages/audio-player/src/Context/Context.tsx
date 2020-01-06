import React, { useReducer } from 'react';
import { audioPlayerState } from '../AudioCore/audio-reducer';
import AudioPlayerContext from './context';

import audioMiddleware from '../AudioCore/audio-middleware';
import rootReducer from '../AudioCore/audio-reducer';

function Context({ children }) {
  const audioContext = useReducer(rootReducer, audioPlayerState);

  return (
    <AudioPlayerContext.Provider value={audioContext}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export default Context;

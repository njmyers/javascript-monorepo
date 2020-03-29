import * as React from 'react';
import useThunkReducer from 'react-hook-thunk-reducer';

import rootReducer, { initialState } from '../AudioCore/audio-reducer';
import AudioPlayerContext from './AudioPlayerContext';

import audioMiddleware from '../AudioCore/audio-middleware';

const AudioPlayerProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useThunkReducer(rootReducer, initialState);
  const enhancedDispatch = audioMiddleware(dispatch, state);

  console.log(state.current);

  return (
    <AudioPlayerContext.Provider value={[state, enhancedDispatch]}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioPlayerProvider;

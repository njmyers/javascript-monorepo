import * as React from 'react';
import { initialState, State } from '../AudioCore/audio-reducer';
import { Action } from '../AudioCore/audio-actions';

export type Context = [State, React.Dispatch<Action> | (() => void)];

const noop = (): void => {
  null;
};

const AudioPlayerContext = React.createContext<Context>([initialState, noop]);

export default AudioPlayerContext;

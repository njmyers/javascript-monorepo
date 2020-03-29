import * as React from 'react';

import { State } from '../AudioCore/audio-reducer';
import { Action } from '../AudioCore/audio-actions';

import sideEffects from './audio-side-effects';

/** An enhanced dispatch that will run side effects after updating. */
function dispatchSideEffects(dispatch: React.Dispatch<Action>, state: State) {
  return (action: Action): void => {
    dispatch(action);
    sideEffects(state, action);
  };
}

export default dispatchSideEffects;

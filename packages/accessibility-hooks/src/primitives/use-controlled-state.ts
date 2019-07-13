import { useState, useCallback } from 'react';
import { State, ChangeEventHandler, InternalChangeHandler } from './types';

export interface ControlledState {
  controlledState?: State;
  initialState: State;
  onChange?: ChangeEventHandler;
}

function useMaybeState({ controlledState, initialState }: ControlledState) {
  if (typeof controlledState === 'undefined') {
    return useState(initialState);
  }

  return [controlledState, undefined];
}

function useControlledState({
  controlledState,
  initialState,
  onChange,
}: ControlledState) {
  const [internalState, setInternalState] = useMaybeState({
    controlledState,
    initialState,
  });

  const handleChange: InternalChangeHandler = useCallback(
    (value, e, callback) => {
      if (setInternalState) {
        setInternalState(value);
      }

      if (callback) {
        callback(value, e);
      }

      if (onChange) {
        onChange(value, e);
      }
    },
    [internalState]
  );

  return [internalState, handleChange];
}

export default useControlledState;

import { useCallback } from 'react';
import useControlledState from './use-controlled-state';
// types
import { State, ChangeEventHandler } from '../primitives';

export interface Value {
  controlledState?: State;
  initialState?: State;
  parse?: (value: string) => State;
  serialize?: (state: State) => string;
  onChange?: ChangeEventHandler;
}

function useValue({
  controlledState,
  initialState = '',
  parse = i => i,
  serialize = i => String(i),
  onChange,
}: Value) {
  const [value, handleChange] = useControlledState({
    controlledState,
    initialState,
    onChange,
  });

  const getHandleChange = useCallback(
    onChange => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      handleChange(parse(value), e, onChange);
    },
    [value, handleChange]
  );

  return { value: serialize(value), getHandleChange };
}

export default useValue;

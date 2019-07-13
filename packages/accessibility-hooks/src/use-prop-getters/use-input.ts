import { useCallback, useMemo } from 'react';
import { useValue } from '../primitives';
import { uniqueId } from '../utils';
// types
import { State, Value, ChangeEventHandler } from '../primitives';

export interface Input extends Value {
  name?: string;
  value?: any;
  initialValue?: any;
  parse?: (value: string) => State;
  serialize?: (state: State) => string;
  onChange?: ChangeEventHandler;
}

function useInput({
  name = 'input',
  value: controlledState,
  initialValue: initialState,
  onChange,
  parse = i => i,
  serialize = i => String(i),
}: Input = {}) {
  const id = useMemo(() => `input-${uniqueId()}`, []);

  const { getHandleChange, value } = useValue({
    controlledState,
    initialState,
    onChange,
    parse,
    serialize,
  });

  const getInputProps = useCallback(
    ({ onChange, ...props } = {}) => ({
      type: 'text',
      name,
      id,
      onChange: getHandleChange(onChange),
      value,
      ...props,
    }),
    [value, name, onChange]
  );

  const getLabelProps = useCallback(
    (props = {}) => ({
      htmlFor: id,
      ...props,
    }),
    [value, name, onChange]
  );

  return { getInputProps, getLabelProps, value };
}

export default useInput;

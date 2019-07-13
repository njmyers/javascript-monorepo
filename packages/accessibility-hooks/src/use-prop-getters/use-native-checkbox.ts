import { useCallback, useMemo } from 'react';
import { useToggle } from '../primitives';
import { uniqueId } from '../utils';
// types
import { Toggle, Event } from '../primitives';

export interface Checkbox extends Toggle {
  name?: string;
  checked?: boolean;
  initialChecked?: boolean;
  onChange?: (checked: boolean, e: Event) => void;
}

function useCheckbox({
  name = 'checkbox',
  checked: controlledState,
  initialChecked: initialState,
  onChange,
}: Checkbox = {}) {
  const id = useMemo(() => `checkbox-${uniqueId()}`, []);

  const { getHandleChange, toggled } = useToggle({
    controlledState,
    initialState,
    onChange,
  });

  const getCheckboxProps = useCallback(
    ({ onChange, ...props } = {}) => ({
      name,
      id,
      type: 'checkbox',
      checked: toggled,
      onChange: getHandleChange(onChange),
      ...props,
    }),
    [name, id, toggled, getHandleChange]
  );

  const getLabelProps = useCallback(
    (props = {}) => ({
      htmlFor: id,
      name,
      ...props,
    }),
    [name, id]
  );

  return { getCheckboxProps, getLabelProps, checked: toggled };
}

export default useCheckbox;

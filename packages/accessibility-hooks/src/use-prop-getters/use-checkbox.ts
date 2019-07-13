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

  const { getHandleClick, getHandleKeyPress, toggled } = useToggle({
    controlledState,
    initialState,
    onChange,
  });

  const getCheckboxProps = useCallback(
    ({ onClick, onKeyPress, onChange, ...props } = {}) => ({
      name,
      role: 'checkbox',
      'aria-checked': toggled,
      'aria-labelledby': id,
      tabIndex: 0,
      onClick: getHandleClick(onClick),
      onKeyPress: getHandleKeyPress(onKeyPress),
      ...props,
    }),
    [toggled, getHandleClick, getHandleKeyPress, name]
  );

  const getLabelProps = useCallback(
    ({ onClick, onKeyPress, ...props } = {}) => ({
      id,
      onClick: getHandleClick(onClick),
      onKeyPress: getHandleKeyPress(onKeyPress),
      ...props,
    }),
    [toggled, getHandleClick, getHandleKeyPress, name]
  );

  return { getCheckboxProps, getLabelProps, checked: toggled };
}

export default useCheckbox;

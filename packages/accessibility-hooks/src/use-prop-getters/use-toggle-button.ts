import { useCallback } from 'react';
import { useToggle } from '../primitives';
// types
import { Toggle } from '../primitives';

export interface ToggleButton extends Toggle {
  name?: string;
  toggled?: boolean;
  initialToggled?: boolean;
  onChange?: (toggled: boolean, e: React.SyntheticEvent<HTMLElement>) => void;
}

function useToggleButton({
  name = 'toggleButton',
  toggled: controlledState,
  initialToggled: initialState,
  onChange,
}: ToggleButton = {}) {
  const { getHandleClick, getHandleKeyPress, toggled } = useToggle({
    controlledState,
    initialState,
    onChange,
  });

  const getToggleButtonProps = useCallback(
    props => ({
      role: 'button',
      tabIndex: 0,
      name,
      'aria-label': name,
      'aria-pressed': toggled,
      onClick: getHandleClick(props),
      onKeyPress: getHandleKeyPress(props),
      ...props,
    }),
    [toggled, name, onChange]
  );

  return { getToggleButtonProps, toggled };
}

export default useToggleButton;

import { useCallback } from 'react';
import useControlledState from './use-controlled-state';
import { SPACE, ENTER } from '../constants';

function useToggle({ controlledState, initialState = false, onChange }) {
  const [toggled, handleChange] = useControlledState({
    controlledState,
    initialState,
    onChange,
  });

  const getHandleClick = useCallback(
    onClick => (e: React.SyntheticEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      handleChange(!toggled, e, onClick);
    },
    [toggled, handleChange]
  );

  const getHandleChange = useCallback(
    onChange => (e: React.ChangeEvent<HTMLElement>) => {
      handleChange(!toggled, e, onChange);
    },
    [toggled]
  );

  const getHandleKeyPress = useCallback(
    onKeyPress => (e: React.KeyboardEvent<HTMLElement>) => {
      if ([SPACE, ENTER].includes(e.charCode)) {
        e.preventDefault();
        e.stopPropagation();
        handleChange(!toggled, e, onKeyPress);
        return;
      }

      if (onKeyPress) {
        onKeyPress(toggled, e);
      }
    },
    [toggled, handleChange]
  );

  return {
    toggled,
    handleChange,
    getHandleClick,
    getHandleChange,
    getHandleKeyPress,
  };
}

export default useToggle;

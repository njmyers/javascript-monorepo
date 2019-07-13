import { useCallback } from 'react';
import useControlledState from './use-controlled-state';
import { SPACE, ENTER } from '../constants';

import { Event, KeyboardEvent, EventHandler } from './use-controlled-state';

export interface Select {
  onChange?: EventHandler;
  selected?: any;
}

function useSelect({ selected: controlled, onChange }: Select) {
  const [selected, handleChange] = useControlledState(controlled, onChange);

  const getHandleClick = useCallback(
    ({ onClick, item } = {}) => (e: Event) => {
      handleChange(item, e, onClick);
    },
    [selected, handleChange]
  );

  const getHandleKeyPress = useCallback(
    ({ onKeyPress, item } = {}) => (e: KeyboardEvent) => {
      const { charCode } = e;
      if ([SPACE, ENTER].includes(charCode)) {
        handleChange(item, e, onKeyPress);
      } else if (onKeyPress) {
        onKeyPress(e);
      }
    },
    [selected, handleChange]
  );

  return { selected, getHandleClick, getHandleKeyPress };
}

export default useSelect;

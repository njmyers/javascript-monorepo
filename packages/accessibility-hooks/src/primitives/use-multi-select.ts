import { useCallback } from 'react';
import useControlledState from './use-controlled-state';
import { SPACE, ENTER } from '../constants';

import { State, Event, KeyboardEvent } from './use-controlled-state';

function addOrRemove(item: any, selected: Array<any>) {
  return selected.includes(item)
    ? selected.filter(i => i !== item)
    : [...selected, item];
}

export interface MultiSelect {
  selected: [State];
  onChange?: ((state: [State], e: Event) => void) | undefined;
}

function useMultiSelect({ selected: controlled, onChange }: MultiSelect) {
  const [selected, handleChange] = useControlledState(controlled, onChange);

  const getHandleClick = useCallback(
    ({ onClick, item } = {}) => (e: Event) => {
      handleChange(addOrRemove(item, selected), e, onClick);
    },
    [selected, handleChange]
  );

  const getHandleKeyPress = useCallback(
    ({ onKeyPress, item } = {}) => (e: KeyboardEvent) => {
      const { charCode } = e;
      if ([SPACE, ENTER].includes(charCode)) {
        handleChange(addOrRemove(item, selected), e, onKeyPress);
      } else if (onKeyPress) {
        onKeyPress(e);
      }
    },
    [selected, handleChange]
  );

  return { selected, getHandleClick, getHandleKeyPress };
}

export default useMultiSelect;

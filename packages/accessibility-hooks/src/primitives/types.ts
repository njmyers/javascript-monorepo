/** State */
export type State = string | number | boolean;

/** Events */
export type ChangeEvent = React.ChangeEvent<HTMLElement>;
export type ClickEvent = React.KeyboardEvent<HTMLElement>;
export type KeyboardEvent = React.KeyboardEvent<HTMLElement>;
export type Event = ChangeEvent | ClickEvent | KeyboardEvent;

/** Event Handlers */
export type ChangeEventHandler =
  | ((state: State, e: ChangeEvent) => void)
  | undefined;

export type ClickEventHandler =
  | ((state: State, e: ClickEvent) => void)
  | undefined;

export type KeyboardEventHandler =
  | ((state: State, e: KeyboardEvent) => void)
  | undefined;

/** Event Handler Getter */
export type InternalChangeHandler = (
  state: State,
  e: ChangeEvent,
  callback: ChangeEventHandler
) => void;

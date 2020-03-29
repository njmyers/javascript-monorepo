import * as ActionTypes from './audio-action-types';
import { Track, State, ID } from './audio-reducer';

export interface UpdateAction {
  type:
    | typeof ActionTypes.TICK
    | typeof ActionTypes.START
    | typeof ActionTypes.STOP
    | typeof ActionTypes.PAUSE
    | typeof ActionTypes.VOLUME
    | typeof ActionTypes.MUTE
    | typeof ActionTypes.SEEK
    | typeof ActionTypes.HIDE
    | typeof ActionTypes.SHOW
    | typeof ActionTypes.SET_INTERVAL;
  payload: Partial<State>;
}

export interface SimpleAction {
  type: typeof ActionTypes.DESTROY | typeof ActionTypes.CLEAR_INTERVAL;
}

export function tick(payload: Partial<State>): UpdateAction {
  return {
    type: ActionTypes.TICK,
    payload,
  };
}

export interface ErrorAction {
  type: typeof ActionTypes.ERROR;
  payload: string;
}

export function playerError(error: string): ErrorAction {
  return {
    type: ActionTypes.ERROR,
    payload: error,
  };
}

export function start(): UpdateAction {
  return {
    type: ActionTypes.START,
    payload: {
      playing: true,
    },
  };
}

export function stop(): UpdateAction {
  return {
    type: ActionTypes.STOP,
    payload: {
      playing: false,
      currentTime: 0,
    },
  };
}

export function pause(): UpdateAction {
  return {
    type: ActionTypes.PAUSE,
    payload: {
      playing: false,
    },
  };
}

export function volume(payload: number): UpdateAction {
  return {
    type: ActionTypes.VOLUME,
    payload: {
      volume: payload,
    },
  };
}

export function mute(payload: boolean): UpdateAction {
  return {
    type: ActionTypes.MUTE,
    payload: {
      muted: payload,
    },
  };
}

/* Track Current Time */
export function seek(payload: number): UpdateAction {
  return {
    type: ActionTypes.SEEK,
    payload: {
      currentTime: payload,
    },
  };
}

/* Select Active */
export interface ScrollAction {
  type: typeof ActionTypes.SCROLL;
  payload: number;
}

export function scroll(payload: number): ScrollAction {
  return {
    type: ActionTypes.SCROLL,
    payload,
  };
}

export function forward(): ScrollAction {
  return {
    type: ActionTypes.SCROLL,
    payload: 1,
  };
}

export function backward(): ScrollAction {
  return {
    type: ActionTypes.SCROLL,
    payload: -1,
  };
}

export interface SelectAction {
  type: typeof ActionTypes.SELECT;
  payload: ID;
}

export function select(payload: ID): SelectAction {
  return {
    type: ActionTypes.SELECT,
    payload,
  };
}

export interface TrackAction {
  type: typeof ActionTypes.LOAD_TRACK;
  payload: Track;
}

/* Add New */
export function load(payload: Track): TrackAction {
  return {
    type: ActionTypes.LOAD_TRACK,
    payload,
  };
}

/* Return an action to show the audio player */
export function show(): UpdateAction {
  return {
    type: ActionTypes.SHOW,
    payload: {
      display: true,
    },
  };
}

/* Return an action to hide the audio player */
export function hide(): UpdateAction {
  return {
    type: ActionTypes.HIDE,
    payload: {
      display: false,
    },
  };
}

/* Return an action to destroy the audio player */
export function destroy(): SimpleAction {
  return {
    type: ActionTypes.DESTROY,
  };
}

/* Return an action to save the interval ID to the global state */
export function saveInterval(intervalId: number): UpdateAction {
  return {
    type: ActionTypes.SET_INTERVAL,
    payload: {
      intervalId,
    },
  };
}

/* Return an action to clear the interval ID from the global state */
export function clearInterval(): SimpleAction {
  return {
    type: ActionTypes.CLEAR_INTERVAL,
  };
}

export type Action =
  | UpdateAction
  | SimpleAction
  | ErrorAction
  | ScrollAction
  | SelectAction
  | TrackAction;

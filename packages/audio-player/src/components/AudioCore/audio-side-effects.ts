import { Howler } from 'howler';
import * as selectors from './audio-selectors';
import * as ActionTypes from './audio-action-types';

import { State } from './audio-reducer';
import { Action } from './audio-actions';

/**
 * Run all needed side effects for each action based on the action type and the
 * current audio player state. This is the correct place to put imperative calls
 * to the global `Howler` or current `Howl` object.
 */
function sideEffects(state: State, action: Action): unknown {
  switch (action.type) {
    case ActionTypes.START: {
      const currentHowl = selectors.selectCurrentHowl(state);
      const playing = selectors.selectCurrentHowlPlaying(state);

      if (playing || !currentHowl) {
        return;
      }

      return currentHowl.play();
    }

    case ActionTypes.STOP: {
      const currentHowl = selectors.selectCurrentHowl(state);
      const playing = selectors.selectCurrentHowlPlaying(state);

      window.clearInterval(state.intervalId);

      if (!currentHowl || !playing) {
        return;
      }

      return currentHowl.stop();
    }

    case ActionTypes.PAUSE: {
      const currentHowl = selectors.selectCurrentHowl(state);
      const playing = selectors.selectCurrentHowlPlaying(state);

      window.clearInterval(state.intervalId);

      if (!currentHowl || !playing) {
        return;
      }

      return currentHowl.pause();
    }

    case ActionTypes.VOLUME: {
      if (typeof action.payload.volume !== 'number') {
        return;
      }

      return Howler.volume(action.payload.volume);
    }

    case ActionTypes.MUTE: {
      if (typeof action.payload.muted !== 'boolean') {
        return;
      }

      return Howler.mute(action.payload.muted);
    }

    case ActionTypes.SELECT:
    case ActionTypes.LOAD_TRACK:
    case ActionTypes.SCROLL: {
      const previousHowl = selectors.selectPreviousHowl(state);

      if (!previousHowl) {
        return;
      }

      return previousHowl.stop();
    }

    case ActionTypes.SEEK: {
      const currentHowl = selectors.selectCurrentHowl(state);

      if (!currentHowl) {
        return;
      }

      return currentHowl.seek(action.payload.currentTime);
    }

    case ActionTypes.CLEAR_INTERVAL: {
      window.clearInterval(state.intervalId);
    }
  }
}

export default sideEffects;

// @ts-nocheck
import {
  getHowl,
  getPreviousHowl,
  getHowlPlayState,
  setGlobalVolume,
  getStateMuted,
  setGlobalMute,
} from './audio-get-set';

import { State } from './types';

/**
 * Side effects 'reducer.' This is not actually a reducer.
 * Please ensure return or break after each statement
 * or you will literally produce unintended 'side effects'
 * @param {object} action redux action
 * @param {object} store redux store provided by redux observable
 */
const sideEffects = (state: State, action) => {
  const howl = getHowl(state);

  switch (action.type) {
    case '@AUDIO_PLAYER/CLEAR_TIMEOUT_ID': {
      return clearTimeout(state.timeoutID);
    }

    case '@AUDIO_PLAYER/START': {
      if (!getHowlPlayState(state) && howl) {
        return howl.play();
      } else {
        return null;
      }
    }

    case '@AUDIO_PLAYER/SOFT_START': {
      if (!getHowlPlayState(state) && state.playing && howl) {
        return howl.play();
      } else {
        return null;
      }
    }

    case '@AUDIO_PLAYER/STOP': {
      if (getHowlPlayState(state) && howl) {
        clearTimeout(state.timeoutID);
        return howl.stop();
      } else {
        return null;
      }
    }

    case '@AUDIO_PLAYER/SOFT_STOP': {
      if (getHowlPlayState(state) && howl) {
        return howl.stop();
      } else {
        return null;
      }
    }

    case '@AUDIO_PLAYER/PAUSE': {
      if (getHowlPlayState(state) && howl) {
        clearTimeout(state.timeoutID);
        return howl.pause();
      } else {
        return null;
      }
    }

    case '@AUDIO_PLAYER/SEEK': {
      if (howl) {
        return howl.seek(action.payload);
      } else {
        return null;
      }
    }

    case '@AUDIO_PLAYER/VOLUME': {
      return setGlobalVolume(action.payload);
    }

    case '@AUDIO_PLAYER/MUTE': {
      const muted = getStateMuted(state);
      return setGlobalMute(muted);
    }

    case '@AUDIO_PLAYER/SCROLL':
    case '@AUDIO_PLAYER/SELECT':
    case '@AUDIO_PLAYER/LOAD_TRACK': {
      const previous = getPreviousHowl(state);
      if (previous) {
        return previous.stop();
      } else {
        return null;
      }
    }

    default: {
      return null;
    }
  }
};

export default sideEffects;

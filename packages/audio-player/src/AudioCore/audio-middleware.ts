// @ts-nocheck
import audioSideEffects from './audio-side-effects';

import {
  updateUI,
  playerStop,
  playerSoftStart,
  playerSoftStop,
  saveTimeoutID,
} from './audio-actions';

import {
  getHowlCurrentTime,
  getHowlDuration,
  getHowlEnded,
  getHowl,
} from './audio-get-set';

const dispatchToSoftStart = [
  '@AUDIO_PLAYER/SCROLL',
  '@AUDIO_PLAYER/SELECT',
  '@AUDIO_PLAYER/LOAD_TRACK',
];

const dispatchToSoftStop = [
  '@AUDIO_PLAYER/SCROLL',
  '@AUDIO_PLAYER/SELECT',
  '@AUDIO_PLAYER/LOAD_TRACK',
];

const dispatchToHardStart = ['@AUDIO_PLAYER/START', '@AUDIO_PLAYER/FRAME'];
const dispatchToHardStop = ['@AUDIO_PLAYER/HIDE', '@AUDIO_PLAYER/DESTROY'];

const isNumber = number => !Number.isNaN(number) || typeof number === 'number';

const frame = (dispatch, state) => () => {
  // dispatch UI update
  const currentTime = getHowlCurrentTime(state);
  const duration = getHowlDuration(state);
  // verify we are getting numerical input
  // sometimes howler returns the howl object from methods...
  dispatch(
    updateUI(
      isNumber(currentTime) ? currentTime : state.currentTime,
      isNumber(duration) ? duration : state.duration
    )
  );
  // conditional dispatch of additional frames
  if (getHowl(state) && getHowlEnded(state) === false) {
    const id = setTimeout(() => {
      dispatch({ type: '@AUDIO_PLAYER/FRAME' });
    }, 1000);

    dispatch(saveTimeoutID(id));
  } else {
    dispatch(playerStop());
  }
};

const audioMiddleware = ({ dispatch, getState }) => next => action => {
  // first pass to reducer
  next(action);
  // then do side effects
  audioSideEffects(getState(), action);
  // dispatch additional internal actions last
  if (dispatchToHardStart.includes(action.type)) {
    frame(dispatch, getState())();
  } else if (dispatchToHardStop.includes(action.type)) {
    dispatch(playerStop());
  }

  if (dispatchToSoftStart.includes(action.type)) {
    dispatch(playerSoftStart());
  } else if (dispatchToSoftStop.includes(action.type)) {
    dispatch(playerSoftStop());
  }
};

export default audioMiddleware;

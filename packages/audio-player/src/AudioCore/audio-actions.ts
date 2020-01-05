// @ts-nocheck
import { createHowl } from './audio-get-set';

export const updateUI = (currentTime: number, duration: number) => ({
  type: '@AUDIO_PLAYER/UPDATE_UI',
  payload: { currentTime, duration },
});

export const playerError = err => ({
  type: '@AUDIO_PLAYER/ERROR',
  payload: err,
});

/* Track Playing Status */
export const playerStart = () => ({
  type: '@AUDIO_PLAYER/START',
  playing: true,
});

export const playerSoftStart = () => ({
  type: '@AUDIO_PLAYER/SOFT_START',
  playing: true,
});

export const playerStop = () => ({
  type: '@AUDIO_PLAYER/STOP',
  playing: false,
});

export const playerSoftStop = () => ({
  type: '@AUDIO_PLAYER/SOFT_STOP',
  playing: false,
});

export const playerPause = () => ({
  type: '@AUDIO_PLAYER/PAUSE',
  playing: false,
});

/* Volume */
export const playerVolume = payload => ({
  type: '@AUDIO_PLAYER/VOLUME',
  payload,
});

export const playerMute = payload => ({
  type: '@AUDIO_PLAYER/MUTE',
  payload,
});

/* Track Current Time */
export const playerSeek = payload => ({
  type: '@AUDIO_PLAYER/SEEK',
  payload,
});

/* Select Active */
export const playerScroll = payload => ({
  type: '@AUDIO_PLAYER/SCROLL',
  payload,
});

export const playerForward = () => playerScroll(1);
export const playerBackward = () => playerScroll(-1);

export const playerSelect = payload => ({
  type: '@AUDIO_PLAYER/SELECT',
  payload,
});

/* Add New */
export const loadTrack = ({ id, urls, name, artist } = {}) => ({
  type: '@AUDIO_PLAYER/LOAD_TRACK',
  payload: {
    id,
    urls,
    name,
    artist,

    // Side Effect
    howl: createHowl(urls),
  },
});

/* Update Size */
export const playerSize = payload => ({
  type: '@AUDIO_PLAYER/SIZE',
  payload,
});

/* Display And Hide */
export const playerShow = () => ({
  type: '@AUDIO_PLAYER/SHOW',
  display: true,
});

export const playerHide = () => ({
  type: '@AUDIO_PLAYER/HIDE',
  display: false,
});

export const playerDestroy = () => ({
  type: '@AUDIO_PLAYER/DESTROY',
});

export const saveTimeoutID = id => ({
  type: '@AUDIO_PLAYER/TIMEOUT_ID',
  id,
});

export const clearTimeoutID = () => ({
  type: '@AUDIO_PLAYER/CLEAR_TIMEOUT_ID',
});

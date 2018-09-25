import { Howl, Howler } from 'howler';
import { compose } from 'smalldash';

const logArg = (arg) => {
  console.log(arg);
  return arg;
};

/* Redux State Getters */
export const getStateVolume = (state) => state.volume;

export const getStateMuted = (state) => state.muted;

export const getCurrentTrack = (state) =>
  state.tracks.length > 0 ? state.tracks[state.current] : null;

export const getPreviousTrack = (state) =>
  state.tracks.length > 0 ? state.tracks[state.previous] : null;

/* Howl Audio Object Getters */
export const getHowl = compose(
  (track) => (track ? track.howl : null),
  getCurrentTrack
);
export const getHowlCurrentTime = compose(
  (howl) => (howl ? howl.seek() : null),
  getHowl
);
export const getHowlDuration = compose(
  (howl) => (howl ? howl.duration() : null),
  getHowl
);
export const getHowlEnded = compose(
  (howl) => (howl ? !howl.playing() : null),
  getHowl
);
export const getHowlLoadingState = compose(
  (howl) => (howl ? howl.state() : null),
  getHowl
);
export const getHowlPlayState = compose(
  (howl) => (howl ? howl.playing() : null),
  getHowl
);

/* Howl Previous Audio Object Getters */
export const getPreviousHowl = compose(
  (track) => (track ? track.howl : null),
  getPreviousTrack
);

/* Global Howler Setters */
export const setGlobalVolume = (value) => Howler.volume(value);
export const setGlobalMute = (bool) => Howler.mute(bool);

/* Create New Howl From Sources */
const defaults = {
  loop: false,
  autoplay: false,
  html5: true,
  preload: true,
};

const validateSources = (src) => (Array.isArray(src) ? src : [src]);

const createWithDefaults = (defaults) => (src) =>
  new Howl({ ...defaults, src });

export const createHowl = compose(
  createWithDefaults(defaults),
  validateSources
);

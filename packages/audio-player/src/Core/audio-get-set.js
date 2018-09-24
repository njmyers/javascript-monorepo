import { Howl, Howler } from 'howler';
import { compose } from 'smalldash';

/* Redux State Getters */
export const getStateVolume = (state) => state.volume;

export const getStateMuted = (state) => state.muted;

export const getCurrentTrack = (state) => state.tracks[state.current];

export const getPreviousTrack = (state) => state.tracks[state.previouss];

/* Howl Audio Object Getters */
export const getHowl = compose(
  (track) => track.howl,
  getCurrentTrack
);
export const getHowlCurrentTime = compose(
  (howl) => howl.seek(),
  getHowl
);
export const getHowlDuration = compose(
  (howl) => howl.duration(),
  getHowl
);
export const getHowlEnded = compose(
  (howl) => !howl.playing(),
  getHowl
);
export const getHowlLoadingState = compose(
  (howl) => howl.state(),
  getHowl
);
export const getHowlPlayState = compose(
  (howl) => howl.playing(),
  getHowl
);

/* Howl Previous Audio Object Getters */
export const getPreviousHowl = compose(
  (track) => track.howl,
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
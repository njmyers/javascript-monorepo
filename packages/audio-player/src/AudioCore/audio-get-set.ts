// @ts-nocheck
import { Howl, Howler } from 'howler';
import { compose } from 'smalldash';
// types
import { Track, State } from './types';

/* Redux State Getters */
export const getStateVolume = (state: State) => state.volume;

export const getStateMuted = (state: State) => state.muted;

export const getCurrentTrack = (state: State) =>
  state.tracks.length > 0 ? state.tracks[state.current] : null;

export const getPreviousTrack = (state: State) =>
  state.tracks.length > 0 ? state.tracks[state.previous] : null;

/* Howl Audio Object Getters */
export const getHowl = compose(
  (track: Track) => (track ? track.howl : null),
  getCurrentTrack
);
export const getHowlCurrentTime = compose(
  (howl: Howl) => (howl ? howl.seek() : null),
  getHowl
);
export const getHowlDuration = compose(
  (howl: Howl) => (howl ? howl.duration() : null),
  getHowl
);
export const getHowlEnded = compose(
  (howl: Howl) => (howl ? !howl.playing() : null),
  getHowl
);
export const getHowlLoadingState = compose(
  (howl: Howl) => (howl ? howl.state() : null),
  getHowl
);
export const getHowlPlayState = compose(
  (howl: Howl) => (howl ? howl.playing() : null),
  getHowl
);

/* Howl Previous Audio Object Getters */
export const getPreviousHowl = compose(
  (track: Track) => (track ? track.howl : null),
  getPreviousTrack
);

/* Global Howler Setters */
export const setGlobalVolume = (value: number) => Howler.volume(value);
export const setGlobalMute = (muted: boolean) => Howler.mute(muted);

/* Create New Howl From Sources */
const defaults = {
  loop: false,
  autoplay: false,
  html5: true,
  preload: true,
};

const validateSources = (src: string | [string]) =>
  Array.isArray(src) ? src : [src];

const createWithDefaults = defaults => src => new Howl({ ...defaults, src });

export const createHowl = compose(
  createWithDefaults(defaults),
  validateSources
);

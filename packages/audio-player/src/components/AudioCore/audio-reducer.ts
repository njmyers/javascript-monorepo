import { Howl } from 'howler';
import { uniq } from 'smalldash';

import * as ActionTypes from './audio-action-types';
import { Action } from './audio-actions';

/** A unique identifier type */
export type ID = string | number;

/**
 * An interface representing a single playable audio track and it's associated
 * metadata.
 */
export interface Track {
  /** The unique identifier for the track */
  id: ID;
  /** The name of the track */
  name: string;
  /** The artist associated with the track */
  artist: string;
  /** A Howl object used to coordinate playback via the HTML5 audio API */
  howl: Howl;
  /** An array of URL sources associated with this track */
  urls: string[];
}

/** An interface representing the current global UI state of the audio player */
export interface State {
  currentTime: number;
  duration: number;
  playing: boolean;
  display: boolean;
  volume: number;
  muted: boolean;
  current: number;
  previous: number;
  tracks: Track[];
  size: {};
  intervalId?: number;
}

/** An initial global UI state of the audio player. */
export const initialState = {
  currentTime: 0,
  duration: 0,
  playing: false,
  display: true,
  volume: 1,
  muted: false,
  current: 0,
  previous: 0,
  tracks: [],
  size: {},
  intervalId: undefined,
};

/**
 * Return the index of the next track based on the current track index, the
 * number of tracks and the number of tracks to scroll by.
 */
function getNextTrack({ current, tracks }: State, scrollBy = 0): number {
  const numberOfTracks = tracks.length;

  return current + scrollBy > 0
    ? (current + scrollBy) % numberOfTracks
    : (current + scrollBy + numberOfTracks) % numberOfTracks;
}

/**
 * Return an array of tracks by combining an existing array of tracks, a new
 * track object and filtering for uniqueness based on the unique identifier.
 */
function addTrack(nextTract: Track, previousTracks: Track[]): Track[] {
  return uniq([...previousTracks, nextTract], (track: Track) => track.id);
}

/**
 * Return the index of a track in an array of tracks based on the the id of the
 * desired track.
 */
function getTrackIndexById(tracks: Track[], id: ID): number {
  if (typeof id === 'number') {
    return tracks.findIndex(track => Number(track.id) === Number(id));
  }

  return tracks.findIndex(track => track.id === id);
}

/**
 * Return a valid current position based on the current length of the tracks
 * array. Valid current positions are integer values greater or equal to 0.
 */
function getCurrentTrack(tracks: Track[]): number {
  return tracks.length === 0 ? 0 : tracks.length - 1;
}

/**
 * Return the next global UI state of the audio player based on the current
 * state and an action of a specified type and payload.
 */
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.SET_INTERVAL:
    case ActionTypes.TICK:
    case ActionTypes.START:
    case ActionTypes.PAUSE:
    case ActionTypes.STOP:
    case ActionTypes.VOLUME:
    case ActionTypes.MUTE:
    case ActionTypes.SEEK:
    case ActionTypes.HIDE:
    case ActionTypes.SHOW:
      return {
        ...state,
        ...action.payload,
      };

    case ActionTypes.SCROLL:
      return {
        ...state,
        current: getNextTrack(state, action.payload),
        previous: state.current,
        currentTime: 0,
      };

    case ActionTypes.SELECT:
      return {
        ...state,
        current: getTrackIndexById(state.tracks, action.payload),
        previous: state.current,
        currentTime: 0,
      };

    case ActionTypes.LOAD_TRACK: {
      const tracks = addTrack(action.payload, state.tracks);

      return {
        ...state,
        tracks,
        current: getCurrentTrack(tracks),
        previous: state.current,
        currentTime: 0,
      };
    }

    default:
      return state;
  }
}

export default reducer;

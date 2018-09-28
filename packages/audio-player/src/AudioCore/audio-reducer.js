import { uniq } from 'smalldash';

// const sampleTrack = {
// 	name: 'name',
// 	artist: 'artists',
// 	Howl: new Howl(),
// 	urls: [],
// };

const audioPlayerState = {
  currentTime: 0,
  duration: 0,
  playing: false,
  display: false,
  volume: 1,
  muted: false,
  current: 0,
  previous: 0,
  tracks: [],
  size: {},
  timeoutID: null,
};

/**
 * Scroll to the next or previous track
 * @param {number} current number to signify active track in player
 * @param {number} tracks total number of tracks in player
 * @param {number} payload usually a +1 or -1 to signify a change in active track
 */
const scrollTracks = (current, tracks, payload) =>
  current + payload > 0
    ? (current + payload) % tracks
    : (current + payload + tracks) % tracks;

/**
 * Select a track by id number
 * @param {array} tracks array of currently available tracks
 * @param {number} id id number of track to select
 */
const selectById = (tracks, id) =>
  tracks.findIndex((track) => Number(track.id) === Number(id));

/**
 * Validate current position so we never go beyond the bounds of the array length
 * @param {array} tracks array of tracks
 */
const validateCurrent = (tracks) =>
  tracks.length === 0 ? 0 : tracks.length - 1;

/**
 * Root redux reducer for the audio player
 * @param {object} state redux state
 * @param {object} action redux action with parameters type and payload
 */
const audioPlayerReducer = (state = audioPlayerState, action) => {
  switch (action.type) {
    case '@AUDIO_PLAYER/TIMEOUT_ID':
      return {
        ...state,
        timeoutID: action.id,
      };
    case '@AUDIO_PLAYER/UPDATE_UI':
      return {
        ...state,
        currentTime: action.payload.currentTime,
        duration: action.payload.duration,
      };
    case '@AUDIO_PLAYER/START':
    case '@AUDIO_PLAYER/PAUSE':
      return { ...state, playing: action.playing };
    case '@AUDIO_PLAYER/STOP':
      return { ...state, playing: action.playing, currentTime: 0 };
    case '@AUDIO_PLAYER/SEEK':
      return { ...state, currentTime: action.payload };
    case '@AUDIO_PLAYER/VOLUME':
      return { ...state, volume: action.payload };
    case '@AUDIO_PLAYER/MUTE':
      return { ...state, muted: action.payload };
    case '@AUDIO_PLAYER/SCROLL':
      return {
        ...state,
        current: scrollTracks(
          state.current,
          state.tracks.length,
          action.payload
        ),
        previous: state.current,
        currentTime: 0,
      };
    case '@AUDIO_PLAYER/SELECT':
      return {
        ...state,
        current: selectById(state.tracks, action.payload),
        previous: state.current,
        currentTime: 0,
      };
    case '@AUDIO_PLAYER/LOAD_TRACK':
      // prefer existing object
      const tracks = uniq(
        [state.tracks.reverse(), action.payload],
        (object) => object.id
      );

      return {
        ...state,
        tracks,
        current: validateCurrent(tracks),
        previous: state.current,
        currentTime: 0,
      };
    case '@AUDIO_PLAYER/SIZE':
      return {
        ...state,
        size: action.payload,
      };
    case '@AUDIO_PLAYER/HIDE':
    case '@AUDIO_PLAYER/SHOW':
      return {
        ...state,
        display: action.display,
      };
    default:
      return state;
  }
};

export default audioPlayerReducer;

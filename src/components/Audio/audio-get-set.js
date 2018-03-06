import { compose } from 'redux';

/* Redux State Getters */
export const getStateSlice = (slice) => (state) => state.getState()[slice];
export const getAudioPlayer = getStateSlice('audioPlayer');
export const getStateVolume = compose((slice) => slice.volume, getAudioPlayer);
export const getStateMuted = compose((slice) => slice.muted, getAudioPlayer);
export const getCurrentTrack = compose((slice) => slice.tracks[slice.current], getAudioPlayer);
export const getPreviousTrack = compose((slice) => slice.tracks[slice.previous], getAudioPlayer);

/* HTML5 Audio Object Getters */
export const getHTML5 = compose((track) => track.HTML5, getCurrentTrack);
export const getHTML5CurrentTime = compose((HTML5) => HTML5.currentTime, getHTML5);
export const getHTML5Duration = compose((HTML5) => HTML5.duration, getHTML5);
export const getHTML5Muted = compose((HTML5) => HTML5.muted, getHTML5);
export const getHTML5Ended = compose((HTML5) => HTML5.endued, getHTML5);

/* HTML5 Previous Audio Object Getters */
export const getPreviousHTML5 = compose((track) => track.HTML5, getPreviousTrack);

/* HTML5 Audio Object State Setters */
export const setVolume = compose(
	(slice) => (value) => (slice.active.HTML5.volume = value),
	getAudioPlayer
);

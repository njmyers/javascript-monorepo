import { compose } from 'redux';

/* Redux State Getters */
export const getStateSlice = (slice) => (state) => state.getState()[slice];
export const getAudioPlayer = getStateSlice('audioPlayer');
export const getVolume = compose((slice) => slice.volume, getAudioPlayer);
export const getCurrentTrack = compose((slice) => slice.tracks[slice.current], getAudioPlayer);

/* HTML5 Audio Object Getters */
export const getHTML5 = compose((track) => track.HTML5, getCurrentTrack);
export const getCurrentTime = compose((HTML5) => HTML5.currentTime, getHTML5);
export const getDuration = compose((HTML5) => HTML5.duration, getHTML5);
export const getMuteState = compose((HTML5) => HTML5.muted, getHTML5);

/* HTML5 Audio Object State Setters */
export const setVolume = compose(
	(slice) => (value) => (slice.active.HTML5.volume = value),
	getAudioPlayer
);

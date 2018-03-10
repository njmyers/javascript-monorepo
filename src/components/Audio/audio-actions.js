import { createHowl } from './audio-get-set';

export const updateUI = (currentTime, duration) => ({
	type: 'AUDIO_PLAYER_UPDATE_UI',
	payload: { currentTime, duration },
});

export const playerError = (err) => ({
	type: 'AUDIO_PLAYER_ERROR',
	payload: err,
});

/* Track Playing Status */
export const playerStart = () => ({ type: 'AUDIO_PLAYER_PLAY' });
export const playerStop = () => ({ type: 'AUDIO_PLAYER_STOP' });
export const playerPause = () => ({ type: 'AUDIO_PLAYER_PAUSE' });

/* Volume */
export const playerVolume = (payload) => ({ type: 'AUDIO_PLAYER_VOLUME', payload });
export const playerMute = () => ({ type: 'AUDIO_PLAYER_MUTE' });

/* Track Current Time */
export const playerSeek = (payload) => ({ type: 'AUDIO_PLAYER_SEEK', payload });

/* Select Active */
export const playerScroll = (payload) => ({ type: 'AUDIO_PLAYER_SCROLL', payload });
export const playerSelect = (payload) => ({ type: 'AUDIO_PLAYER_SELECT', payload });

/* Add New */
export const loadTrack = ({ id, urls, name, artist } = {}) => ({
	type: 'AUDIO_PLAYER_LOAD_TRACK',
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
export const playerSize = (payload) => ({ type: 'AUDIO_PLAYER_SIZE', payload });

/* Display And Hide */
const playerShow = () => ({ type: 'AUDIO_PLAYER_DISPLAY', display: true });
const playerHide = () => ({ type: 'AUDIO_PLAYER_DISPLAY', display: false });

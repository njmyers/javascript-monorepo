import { Howler } from 'howler';
import {
	getHowl,
	getPreviousHowl,
	getHowlPlayState,
	getStateVolume,
	setGlobalVolume,
	getStateMuted,
	setGlobalMute,
} from './audio-get-set';

/*
	Side effects 'reducer'
	This is not actually a reducer
	please ensure return or break after each statement
	or you will literally produce unintended 'side effects'
*/

const sideEffects = (action, store) => {
	// get state once and then use getters
	const state = store.getState();
	const howl = getHowl(state);

	switch (action.type) {
		case 'AUDIO_PLAYER_PLAY':
			const playing = getHowlPlayState(state);
			if (!playing) howl.play();
			return;
		case 'AUDIO_PLAYER_STOP':
			howl.stop();
			return;
		case 'AUDIO_PLAYER_PAUSE':
			howl.pause();
			return;
		case 'AUDIO_PLAYER_SEEK':
			howl.seek(action.payload);
			return;
		case 'AUDIO_PLAYER_VOLUME':
			setGlobalVolume(action.payload);
			return;
		case 'AUDIO_PLAYER_MUTE':
			const muted = getStateMuted(state);
			setGlobalMute(muted);
			return;
		case 'AUDIO_PLAYER_SCROLL':
		case 'AUDIO_PLAYER_SELECT':
		case 'AUDIO_PLAYER_LOAD_TRACK':
			const previous = getPreviousHowl(state);
			previous.stop();
			return;
		default:
			return;
	}
};

export default sideEffects;

import {
	getHTML5,
	getStateVolume,
	getStateMuted,
	getHTML5Muted,
	getPreviousHTML5,
} from './audio-get-set';

/*
	Side effects 'reducer'
	This is not actually a reducer
	please ensure return or break after each statement
	or you will literally produce unintended 'side effects'
*/

const sideEffects = (action, state) => {
	const HTML5 = getHTML5(state);

	switch (action.type) {
		case 'AUDIO_PLAYER_PLAY':
			HTML5.muted = getStateMuted(state);
			HTML5.volume = getStateVolume(state);
			HTML5.play();
			return;
		case 'AUDIO_PLAYER_STOP':
			HTML5.pause();
			HTML5.currentTime = 0;
			return;
		case 'AUDIO_PLAYER_PAUSE':
			HTML5.pause();
			return;
		case 'AUDIO_PLAYER_SEEK':
			HTML5.currentTime = action.payload;
			return;
		case 'AUDIO_PLAYER_VOLUME':
			HTML5.volume = action.payload;
			return;
		case 'AUDIO_PLAYER_MUTE':
			HTML5.muted = !getHTML5Muted(state);
			return;
		case 'AUDIO_PLAYER_SCROLL':
		case 'AUDIO_PLAYER_SELECT':
		case 'AUDIO_PLAYER_LOAD_TRACK':
			const previous = getPreviousHTML5(state);
			previous.pause();
			previous.currentTime = 0;
			return;
		default:
			return;
	}
};

export default sideEffects;

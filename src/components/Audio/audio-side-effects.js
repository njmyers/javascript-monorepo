import { getHTML5, getVolume, getMuteState } from './audio-get-set';

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
			const volume = getVolume(state);
			HTML5.volume = volume;
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
			const muted = getMuteState(state);
			HTML5.muted = !muted;
			return;
		default:
			return;
	}
};

export default sideEffects;

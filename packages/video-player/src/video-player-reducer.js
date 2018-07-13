import { constants } from './video-player-actions';

const playerStyle = {
	width: 0,
	height: 0,
};

const videoPlayerState = {
	src: '', // current video source
	display: false, // is the player displayed
	encoding: '', // browser encoding
	object: {}, // HTML5 video object
	container: {}, // video container DOM object
	muted: false,
	volume: 100,
	playerStyle: playerStyle,
	playing: false, // is video playing
	clock: '0:00', // current video time
	length: '0:00', // current video duration
	seek: 0, // current video percent complete (as number) for input range
	interval: {}, // reference to interval
	counter: 0, // seconds elapsed since previous 'frame'
	time: {}, // date object at last frame
};

function videoPlayer(state = videoPlayerState, action) {
	switch (action.type) {
		case constants.VIDEO_FRAME:
			return Object.assign({}, state, {
				counter: action.payload.counter,
				time: action.payload.time,
			});
		case constants.SHOW_VIDEO_PLAYER:
		case constants.HIDE_VIDEO_PLAYER:
			return Object.assign({}, state, {
				[action.key]: action.value,
			});
		case constants.UPDATE_VIDEO_ENCODING:
		case constants.LOAD_VIDEO_OBJECT:
		case constants.LOAD_CONTAINER_OBJECT:
		case constants.VIDEO_MUTE_STATE:
		case constants.VIDEO_VOLUME:
		case constants.VIDEO_PLAY_STATE:
		case constants.VIDEO_LENGTH:
		case constants.VIDEO_CLOCK:
		case constants.VIDEO_SEEK:
		case constants.VIDEO_SRC:
		case constants.SAVE_VIDEO_INTERVAL:
			return Object.assign({}, state, {
				[action.key]: action.payload,
			});
		case constants.VIDEO_PLAYER_STYLES:
			return Object.assign({}, state, {
				[action.key]: { ...state[action.key], ...action.payload },
			});
		default:
			return state;
	}
}

export default videoPlayer;

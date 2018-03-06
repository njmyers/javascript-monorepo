import uniqBy from 'lodash.uniqby';
import { Howl } from 'howler';

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
};

const scrollTracks = (current, tracks, payload) =>
	current + payload > 0 ? (current + payload) % tracks : (current + payload + tracks) % tracks;

const selectById = (tracks, id) => tracks.findIndex((track) => Number(track.id) === Number(id));

const validateCurrent = (tracks) => (tracks.length === 0 ? 0 : tracks.length - 1);

const audioPlayerReducer = (state = audioPlayerState, action) => {
	switch (action.type) {
		case 'AUDIO_PLAYER_UPDATE_UI':
			return {
				...state,
				currentTime: action.payload.currentTime,
				duration: action.payload.duration,
			};
		case 'AUDIO_PLAYER_PLAY':
			return { ...state, playing: true };
		case 'AUDIO_PLAYER_STOP':
			return { ...state, playing: false, currentTime: 0 };
		case 'AUDIO_PLAYER_PAUSE':
			return { ...state, playing: false };
		case 'AUDIO_PLAYER_SEEK':
			return { ...state, currentTime: action.payload };
		case 'AUDIO_PLAYER_VOLUME':
			return { ...state, volume: action.payload };
		case 'AUDIO_PLAYER_MUTE':
			return { ...state, muted: !state.muted };
		case 'AUDIO_PLAYER_SCROLL':
			return {
				...state,
				current: scrollTracks(state.current, state.tracks.length, action.payload),
				previous: state.current,
				currentTime: 0,
			};
		case 'AUDIO_PLAYER_SELECT':
			return {
				...state,
				current: selectById(state.tracks, action.payload),
				previous: state.current,
				currentTime: 0,
			};
		case 'AUDIO_PLAYER_LOAD_TRACK':
			const tracks = uniqBy([...state.tracks, action.payload], 'id');
			return {
				...state,
				tracks,
				current: validateCurrent(tracks),
				previous: state.current,
				currentTime: 0,
			};
		case 'AUDIO_PLAYER_SIZE':
			return {
				...state,
				size: action.payload,
			};
		default:
			return state;
	}
};

export default audioPlayerReducer;

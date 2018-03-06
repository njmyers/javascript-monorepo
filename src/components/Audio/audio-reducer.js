import uniqBy from 'lodash.uniqby';

const audioPlayerState = {
	currentTime: 0,
	duration: 0,
	playing: false,
	display: false,
	volume: 1,
	muted: false,
	current: 0,
	previous: 0,
	tracks: [
		{
			id: 39847534,
			artist: 'Some Artist',
			name: 'AutoPilot',
			HTML5: new Audio('https://blatboy.s3.amazonaws.com/2017/11/Autopilot_10-29-09.mp3'),
			url: '',
		},
		{
			id: 23409234,
			artist: 'Some Artist 2 ',
			name: 'Kim Fab Ex 2',
			HTML5: new Audio('https://blatboy.s3.amazonaws.com/2017/11/KimFabEx.mp3'),
			url: '',
		},
	],
	size: {},
};

const scrollTracks = (current, tracks, payload) =>
	current + payload > 0 ? (current + payload) % tracks : (current + payload + tracks) % tracks;

const selectById = (tracks, id) => tracks.findIndex((track) => Number(track.id) === Number(id));

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
			return {
				...state,
				tracks: uniqBy([...state.tracks, action.payload], 'id'),
				current: state.current + 1,
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

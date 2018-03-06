import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';

import { combineEpics } from 'redux-observable';

import sideEffects from './audio-side-effects';

import { getHTML5CurrentTime, getHTML5Duration, getHTML5Ended } from './audio-get-set';
import { updateUI, trackEnded, playerStop, playerStart } from './audio-actions';

import timer from './timer';
const frame$ = timer();

/*
	Since all of our actions create side effects
	we have located them all to one epic/side effect 'reducer'
	the epic listens for all actions that create side effects
	and the reducer 'reduces' the side effects.
	This way we can write side effects more declaratively

	These side effects happen after reducer
*/

const sideEffectsEpic = (actions$, state) =>
	actions$
		.ofType(
			'AUDIO_PLAYER_PLAY',
			'AUDIO_PLAYER_STOP',
			'AUDIO_PLAYER_PAUSE',
			'AUDIO_PLAYER_SEEK',
			'AUDIO_PLAYER_VOLUME',
			'AUDIO_PLAYER_MUTE',
			'AUDIO_PLAYER_SCROLL',
			'AUDIO_PLAYER_SELECT'
		)
		.do((action) => sideEffects(action, state))
		.ignoreElements();

const audioPlayerChangeTrack = (actions$, state) =>
	actions$
		.ofType('AUDIO_PLAYER_SCROLL', 'AUDIO_PLAYER_SELECT', 'AUDIO_PLAYER_LOAD_NEW')
		.mapTo(playerStart());

/*
	Normal Epic for updating player state based on frame rate
*/

const audioUIEpic = (actions$, state) =>
	actions$.ofType('AUDIO_PLAYER_PLAY').mergeMap(() => {
		return frame$
			.takeUntil(
				actions$.ofType(
					'AUDIO_PLAYER_STOP',
					'AUDIO_PLAYER_PAUSE',
					'AUDIO_PLAYER_SCROLL',
					'AUDIO_PLAYER_SELECT'
				)
			)
			.mergeMap((frame) =>
				Observable.concat(
					Observable.of(
						getHTML5Ended(state)
							? playerStop()
							: updateUI(getHTML5CurrentTime(state), getHTML5Duration(state))
					)
				)
			);
	});

export default combineEpics(audioUIEpic, sideEffectsEpic, audioPlayerChangeTrack);

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';

import { combineEpics } from 'redux-observable';

import { getHTML5 } from './audio-get-set';
import sideEffects from './audio-side-effects';

import { updateUI, trackEnded, playerStop } from './audio-actions';

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
			'AUDIO_PLAYER_MUTE'
		)
		.do((action) => sideEffects(action, state))
		.ignoreElements();

/*
	Normal Epic for updating player state based on frame rate
*/

const audioUIEpic = (actions$, state) =>
	actions$.ofType('AUDIO_PLAYER_PLAY').mergeMap(() => {
		const HTML5 = getHTML5(state);
		return frame$
			.takeUntil(actions$.ofType('AUDIO_PLAYER_STOP', 'AUDIO_PLAYER_PAUSE'))
			.mergeMap((frame) =>
				Observable.concat(
					Observable.of(
						HTML5.ended ? playerStop() : updateUI(HTML5.currentTime, HTML5.duration)
					)
				)
			);
	});

export default combineEpics(audioUIEpic, sideEffectsEpic);

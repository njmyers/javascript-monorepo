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

import { updateUI, trackEnded, playerStop, playerStart } from './audio-actions';
import { getHowlCurrentTime, getHowlDuration, getHowlEnded } from './audio-get-set';

import sideEffects from './audio-side-effects';
import timer from './timer';

/**
 *	Since all of our actions create side effects
 *	we have located them all to one epic/side effect 'reducer'
 *	the epic listens for all actions that create side effects
 *	and the reducer 'reduces' the side effects.
 *	This way we can write side effects more declaratively
 *
 *	These side effects happen after reducer
 *
 * @param {stream} actions$ stream of actions provided by redux observable
 * @param {object} store redux store with getStore() method
 */
const sideEffectsEpic = (actions$, store) =>
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
		.do((action) => sideEffects(action, store))
		.ignoreElements();

/**
 * Auto start on changing track actions.
 * @param {stream} actions$ stream of actions provided by redux observable
 */
const audioPlayerChangeTrack = (actions$) =>
	actions$
		.ofType('AUDIO_PLAYER_SCROLL', 'AUDIO_PLAYER_SELECT', 'AUDIO_PLAYER_LOAD_TRACK')
		.mapTo(playerStart());

/**
 * Normal Epic for updating player state based on frame rate
 *
 * @param {stream} actions$ stream of actions provided by redux observable
 * @param {object} store redux store with getStore() method
 */

const frame$ = timer();

const audioUIEpic = (actions$, store) =>
	actions$.ofType('AUDIO_PLAYER_PLAY').mergeMap(() =>
		frame$
			.takeUntil(
				actions$.ofType(
					'AUDIO_PLAYER_STOP',
					'AUDIO_PLAYER_PAUSE',
					'AUDIO_PLAYER_SCROLL',
					'AUDIO_PLAYER_SELECT'
				)
			)
			.mergeMap((frame) => {
				const state = store.getState();
				return Observable.of(
					getHowlEnded(state)
						? playerStop()
						: updateUI(getHowlCurrentTime(state), getHowlDuration(state))
				);
			})
	);

export default combineEpics(audioUIEpic, sideEffectsEpic, audioPlayerChangeTrack);

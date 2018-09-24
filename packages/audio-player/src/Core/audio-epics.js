import { of, timer } from 'rxjs';
import {
  mergeMap,
  takeUntil,
  tap,
  mapTo,
  ignoreElements,
} from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import { updateUI, playerStop, playerStart } from './audio-actions';

import {
  getHowlCurrentTime,
  getHowlDuration,
  getHowlEnded,
} from './audio-get-set';

import sideEffects from './audio-side-effects';

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
const sideEffectsEpic = (actions$, $state) =>
  actions$.pipe(
    ofType(
      'AUDIO_PLAYER_PLAY',
      'AUDIO_PLAYER_STOP',
      'AUDIO_PLAYER_PAUSE',
      'AUDIO_PLAYER_SEEK',
      'AUDIO_PLAYER_VOLUME',
      'AUDIO_PLAYER_MUTE',
      'AUDIO_PLAYER_SCROLL',
      'AUDIO_PLAYER_SELECT'
    ),
    tap((action) => sideEffects(action, $state)),
    ignoreElements()
  );

/**
 * Auto start on changing track actions.
 * @param {stream} actions$ stream of actions provided by redux observable
 */
const audioPlayerChangeTrack = (actions$) =>
  actions$.pipe(
    ofType(
      'AUDIO_PLAYER_SCROLL',
      'AUDIO_PLAYER_SELECT',
      'AUDIO_PLAYER_LOAD_TRACK'
    ),
    mapTo(playerStart())
  );

/**
 * Auto stop on actions.
 * @param {stream} actions$ stream of actions provided by redux observable
 */
const stopEpic = (actions$) =>
  actions$.pipe(
    ofType('AUDIO_PLAYER_HIDE'),
    mapTo(playerStop())
  );

/**
 * Normal Epic for updating player state based on frame rate
 *
 * @param {stream} actions$ stream of actions provided by redux observable
 * @param {object} store redux store with getStore() method
 */

const frame$ = timer(1000, 1000);

const audioUIEpic = (actions$, state$) =>
  actions$.pipe(
    ofType('AUDIO_PLAYER_PLAY'),
    mergeMap(() =>
      frame$.pipe(
        takeUntil(
          actions$.ofType(
            'AUDIO_PLAYER_STOP',
            'AUDIO_PLAYER_PAUSE',
            'AUDIO_PLAYER_SCROLL',
            'AUDIO_PLAYER_SELECT'
          )
        ),
        mergeMap((frame) => {
          const state = state$.value;
          return of(
            getHowlEnded(state)
              ? playerStop()
              : updateUI(getHowlCurrentTime(state), getHowlDuration(state))
          );
        })
      )
    )
  );

export default combineEpics(
  audioUIEpic,
  sideEffectsEpic,
  stopEpic,
  audioPlayerChangeTrack
);

import { Thunk } from 'react-hook-thunk-reducer';

import * as actions from './audio-actions';
import * as selectors from './audio-selectors';
import * as events from './howl-events';

import createHowl from './create-howl';

import { Track, State } from './audio-reducer';
import { Action } from './audio-actions';

/**
 * A thunk representing a "tick" or single UI update based on the current howl
 * states. This update is represented as a thunk as it must have access to the
 * current state no matter when or where it is called.
 */
export function tick(): Thunk<State, Action> {
  return (dispatch, getState): void => {
    const state = getState();

    dispatch(
      actions.tick({
        currentTime: selectors.selectCurrentHowlTime(state) || 0,
        duration: selectors.selectCurrentHowlDuration(state) || 0,
      })
    );
  };
}

/** A type representing the pure data of the track without the howl */
type TrackData = Omit<Track, 'howl'>;

/*
 * Return a thunk that creats a new track based on track data. The thunk also
 * sets up event listeners based on the howl play state that will dispatch
 * actions to update the global UI state.
 */
export function create({ urls, ...track }: TrackData): Thunk<State, Action> {
  return (dispatch): void => {
    const howl = createHowl(...(urls ?? []));

    howl.on(events.load, () => {
      dispatch(tick());
    });

    howl.on(events.play, () => {
      const intervalId = window.setInterval(() => dispatch(tick()), 1000);
      dispatch(actions.saveInterval(intervalId));
    });

    howl.on(events.pause, () => {
      dispatch(actions.pause());
    });

    howl.on(events.stop, () => {
      dispatch(actions.stop());
    });

    dispatch(
      actions.load({
        ...track,
        urls,
        howl,
      })
    );
  };
}

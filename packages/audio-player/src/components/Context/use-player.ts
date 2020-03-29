import { useContext } from 'react';
import AudioPlayerContext from './AudioPlayerContext';
import { actions, State } from '../AudioCore';
import { create } from '../AudioCore/audio-thunks';

type Actions = typeof actions;
type Action = Actions[keyof Actions];

export interface Player {
  state: State;
  start: Actions['start'];
  stop: Actions['start'];
  pause: Actions['pause'];
  forward: Actions['forward'];
  backward: Actions['backward'];

  seek: Actions['seek'];
  scroll: Actions['scroll'];
  select: Actions['select'];
  mute: Actions['mute'];
  volume: Actions['volume'];

  hide: Actions['hide'];
  show: Actions['show'];
  destroy: Actions['destroy'];
  load: typeof create;
}

export function usePlayer(): Player {
  const [state, dispatch] = useContext(AudioPlayerContext);

  const getCallback = <T>(actionCreator: T) => (...args: Parameters<T>): void =>
    dispatch(actionCreator(...args));

  return {
    state,
    start: getCallback<typeof actions.start>(actions.start),
    stop: getCallback(actions.stop),
    pause: getCallback(actions.pause),
    forward: getCallback(actions.forward),
    backward: getCallback(actions.backward),
    select: getCallback(actions.select),

    seek: getCallback(actions.seek),
    scroll: getCallback(actions.scroll),
    mute: getCallback(actions.mute),
    volume: getCallback(actions.volume),

    hide: getCallback(actions.hide),
    show: getCallback(actions.show),
    destroy: getCallback(actions.destroy),
    load: getCallback(create),
  };
}

export default usePlayer;

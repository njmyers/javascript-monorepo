import { useCallback, useContext } from 'react';
import AudioPlayerContext from './context';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  playerStart,
  playerStop,
  playerPause,
  playerForward,
  playerBackward,
  playerHide,
  playerShow,
  playerSeek,
  playerScroll,
  playerDestroy,
  playerVolume,
  playerMute,
  loadTrack,
} from '../AudioCore';
// types
import { State } from '../AudioCore';
import { Player } from './types';

function usePlayer(): Player {
  const [state, dispatch] = useContext(AudioPlayerContext);

  const getDispatchCallback = useCallback(
    actionCreator => (...args: [any]) => dispatch(actionCreator(...args)),
    [dispatch]
  );

  return {
    state,
    start: getDispatchCallback(playerStart),
    stop: getDispatchCallback(playerStop),
    pause: getDispatchCallback(playerPause),
    forward: getDispatchCallback(playerForward),
    backward: getDispatchCallback(playerBackward),

    setSeek: getDispatchCallback(playerSeek),
    setScroll: getDispatchCallback(playerScroll),
    setMute: getDispatchCallback(playerMute),
    setVolume: getDispatchCallback(playerVolume),

    hide: getDispatchCallback(playerHide),
    show: getDispatchCallback(playerShow),
    destroy: getDispatchCallback(playerDestroy),
    loadTrack: getDispatchCallback(loadTrack),
  };
}

export default usePlayer;

import { State } from '../AudioCore';

type ClickHandler = (...args: [any]) => void;

export interface Player {
  state: State;
  start: ClickHandler;
  stop: ClickHandler;
  pause: ClickHandler;
  forward: ClickHandler;
  backward: ClickHandler;

  setSeek: ClickHandler;
  setScroll: ClickHandler;
  setMute: ClickHandler;
  setVolume: ClickHandler;

  hide: ClickHandler;
  show: ClickHandler;
  destroy: ClickHandler;
  loadTrack: Function;
}

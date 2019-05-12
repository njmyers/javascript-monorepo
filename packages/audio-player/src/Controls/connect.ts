import {
  playerStart,
  playerStop,
  playerPause,
  playerForward,
  playerBackward,
} from '../AudioCore';

import { State } from '../AudioCore';

export const mapStateToProps = (state: State) => ({
  playing: state.playing,
});

export const mapDispatchToProps = {
  playerStart,
  playerPause,
  playerStop,
  playerForward,
  playerBackward,
};

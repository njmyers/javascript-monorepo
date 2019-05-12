type ClickHandler = (event: React.SyntheticEvent<HTMLButtonElement>) => null;

export interface Props {
  playing: boolean;
  playerStart: ClickHandler;
  playerPause: ClickHandler;
  playerStop: ClickHandler;
  playerForward: ClickHandler;
  playerBackward: ClickHandler;
}

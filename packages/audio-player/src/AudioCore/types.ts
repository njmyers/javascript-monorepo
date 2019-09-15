export interface Track {
  name: 'name';
  artist: 'artists';
  howl: Howl;
  urls: [string];
}

export interface State {
  currentTime: number;
  duration: number;
  playing: boolean;
  display: boolean;
  volume: number;
  muted: boolean;
  current: number;
  previous: number;
  tracks: Array<Track>;
  size: {};
  timeoutID: number | undefined;
}

import { createContext } from 'react';
import { audioPlayerState } from '../AudioCore/audio-reducer';

interface Context {
  dipatch?: () => void;
  state?: {
    currentTime: number;
    duration: number;
    playing: boolean;
    display: boolean;
    volume: number;
    muted: boolean;
    current: number;
    previous: number;
    tracks: [];
    size: {};
    timeoutID: undefined;
  };
}

const AudioPlayerContext = createContext({ state: audioPlayerState });

export default AudioPlayerContext;

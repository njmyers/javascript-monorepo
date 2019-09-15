import { Player } from './Context';

export interface PlayerProps {
  display?: ['controls' | 'trackInfo' | 'meter' | 'volume'];
  classPrefix?: string;
}

export interface RenderProps {
  render: (player: Player) => void;
}

export interface HOCProps extends Player {}

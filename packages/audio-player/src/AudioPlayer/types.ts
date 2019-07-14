import { Player } from '../Context';

export interface Props extends Player {
  display: ['controls' | 'trackInfo' | 'meter' | 'volume'];
  classPrefix: string;
}

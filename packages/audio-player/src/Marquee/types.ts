export interface Props {
  speed: number;
  state: 'running' | 'paused' | 'initial' | 'inherit';
  lineHeight?: number;
  text: string;
}

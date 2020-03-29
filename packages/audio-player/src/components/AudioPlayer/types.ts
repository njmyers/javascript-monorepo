const Display = ['controls', 'trackInfo', 'meter', 'volume'] as const;

export interface Props {
  display: typeof Display[number][];
  classPrefix: string;
}

import { useTypography } from './use-typography';
import { Colors } from '../types';

export function useColors(): Colors {
  const typography = useTypography();

  return typography.colors;
}

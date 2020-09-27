import { useTypography } from './use-typography';
import { Variants } from '../types';

export function useVariants(): Variants {
  const typography = useTypography();

  return typography.variants;
}

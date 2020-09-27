import { createContext } from 'react';
import * as Typography from './types';

export interface TypographyContextValue {
  variants: Typography.Variants;
  colors: Typography.Colors;
}

export const TypographyContext = createContext<TypographyContextValue>({
  variants: {},
  colors: {},
});

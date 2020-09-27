import * as React from 'react';

import { TypographyContext } from './TypographyContext';
import * as Typography from './types';

export interface TypographyProps {
  variants: Typography.Variants;
  colors: Typography.Colors;
  children: React.ReactNode;
}

export function TypographyProvider({
  variants = {},
  colors = {},
  children,
}: TypographyProps): JSX.Element {
  return (
    <TypographyContext.Provider value={{ variants, colors }}>
      {children}
    </TypographyContext.Provider>
  );
}

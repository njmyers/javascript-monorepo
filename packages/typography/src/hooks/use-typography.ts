import * as React from 'react';
import {
  TypographyContext,
  TypographyContextValue,
} from '../TypographyContext';

export function useTypography(): TypographyContextValue {
  return React.useContext(TypographyContext);
}

import * as React from 'react';
import { TypographyProvider } from '../../src/TypographyProvider';

import styles from './with-typography.module.sass';

type Props = Record<string, unknown>;
type StoryType = React.FC<unknown>;

const variants = {
  ['headline-1']: styles.h1Roboto,
  ['headline-2']: styles.h2Roboto,
  ['headline-3']: styles.h3Roboto,
  ['headline-4']: styles.h4Roboto,
  ['headline-5']: styles.h5Roboto,
  ['headline-6']: styles.h6Roboto,
  ['subtitle-1']: styles.subtitleRoboto1,
  ['subtitle-2']: styles.subtitleRoboto2,
  ['body-1']: styles.bodyRoboto1,
  ['body-2']: styles.bodyRoboto2,
  button: styles.buttonTextRoboto,
  caption: styles.captionRoboto,
  overline: styles.overlineRoboto,
};

const colors = {
  ['primary-1']: styles.primary1,
  ['primary-2']: styles.primary2,
  ['secondary-1']: styles.secondary1,
  ['secondary-2']: styles.secondary2,
  background: styles.background,
  surface: styles.surface,
  error: styles.error,
};

export function withTypography(Story: StoryType, props: Props): JSX.Element {
  return (
    <TypographyProvider variants={variants} colors={colors}>
      <Story {...props} />
    </TypographyProvider>
  );
}

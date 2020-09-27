# Typography

Easily create material design based typography elements. All font variants and colors only need to be used in a single spot!

## Installation

Install using your favorite npm package manager `@njmyers/typography`

## Setup

To setup the typography package you must pass all of the css class for each color and variant into the typography provider.

```tsx
import * as React from 'react';
import { TypographyProvider } from '@njmyers/typography';

import styles from './my-styles.css';

const variants = {
  ['headline-1']: styles.h1,
  ['headline-2']: styles.h2,
  ['headline-3']: styles.h3,
  ['headline-4']: styles.h4,
  ['headline-5']: styles.h5,
  ['headline-6']: styles.h6,
  ['subtitle-1']: styles.subtitle1,
  ['subtitle-2']: styles.subtitle2,
  ['body-1']: styles.body1,
  ['body-2']: styles.body2,
  button: styles.buttonText,
  caption: styles.caption,
  overline: styles.overline,
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

function Application() {
  return (
    <TypographyProvider variants={variants} colors={colors}>
      <Routes />
    </TypographyProvider>
  );
}
```

## Usage

After you have set up the provider you can use all of the elements provided by the package to create your text styles.

```tsx
import * as React from 'react';
import { Headline1, Paragraph } from '@njmyers/typography';

function Page() {
  return (
    <div>
      <Headline1 color="primary-1">Hello there!</Headline1>
      <Paragraph variant="subtitle-1">Welcome to my site</Paragraph>
    </div>
  );
}
```

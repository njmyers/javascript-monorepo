/**
 * All of the available typography system variant identifiers
 */
export interface Variants {
  /** The first headline variant */
  'headline-1'?: string;
  /** The second headline variant */
  'headline-2'?: string;
  /** The third headline variant */
  'headline-3'?: string;
  /** The fourth headline variant */
  'headline-4'?: string;
  /** The fifth headline variant */
  'headline-5'?: string;
  /** The sixth headline variant */
  'headline-6'?: string;
  /** The first subtitle variant */
  'subtitle-1'?: string;
  /** The second subtitle variant */
  'subtitle-2'?: string;
  /** The first body variant */
  'body-1'?: string;
  /** The second body variant */
  'body-2'?: string;
  /** The button text variant */
  button?: string;
  /** The caption variant */
  caption?: string;
  /** The overline variant */
  overline?: string;
}

/**
 * All of the available typography system color identifiers
 */
export interface Colors {
  /** The primary color */
  'primary-1'?: string;
  /** A shaded version of the primary color */
  'primary-2'?: string;
  /** The secondary color */
  'secondary-1'?: string;
  /** A shaded version of the primary color */
  'secondary-2'?: string;
  /** The background color */
  background?: string;
  /** The surface color */
  surface?: string;
  /** The error color */
  error?: string;
}

/** A union type representing all of the possible typography variants */
export type Variant = keyof Variants;

/** A union type representing all of the possible typography colors */
export type Color = keyof Colors;

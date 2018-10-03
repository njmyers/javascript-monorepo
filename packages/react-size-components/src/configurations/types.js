// @flow
import * as React from 'react';

export type Component = {
  height: number,
  width: number,
};

export type WindowSize = {
  innerHeight: number,
  innerWidth: number,
  outerHeight: number,
  outerWidth: number,
};

export type Orientation = 'portrait' | 'landscape';

export type Mobile = boolean;

export type InView = boolean;

export type Sizes = {
  component?: Component,
  orientation?: Orientation,
  mobile?: Mobile,
  inView?: InView,
  window?: WindowSize,
};

export type Schema =
  | Component
  | WindowSize
  | Orientation
  | Mobile
  | InView
  | string;

export type Subscriptions = {
  resize?: boolean,
  scroll?: boolean,
};

export type Configuration = {
  name: string,
  schema: Schema,
  fn: (HTMLElement, window) => Schema,
  subscriptions: null | Subscriptions,
};

export type Configurations = Array<Configuration>;

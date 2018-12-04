/** @flow */
import * as React from 'react';
import type {
  Sizes,
  Configuration,
  Configurations,
} from '../configurations/types';

type ComponentState = {
  subscriptions: Array<any>,
  DOMNode?: { current: HTMLElement | null },
};

export type State = Sizes & ComponentState;

export type Props = {
  onSize?: (State) => any,
  id?: string,
};

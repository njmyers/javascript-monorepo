import { Sizes, Configuration, Configurations } from '../configurations/types';

type ComponentState = {
  subscriptions: Array<any>;
  DOMNode?: { current: HTMLElement | null };
};

export type State = Sizes & ComponentState;

export type Props = {
  onSize?: (state: State) => any;
  id?: string;
};

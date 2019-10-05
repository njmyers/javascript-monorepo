import createTransitionStyle, {
  createTransitionString,
} from '../create-transition-style';

import { AnimationProps } from '../../types';

const props: AnimationProps = {
  onState: {
    opacity: 1,
    transform: 'translateY(-50px)',
  },
  offState: {
    opacity: 0,
    transform: 'translateY(0px)',
  },
  transitionSpeed: 0.2,
  transitionTiming: 'ease',
};

const transition = '0.2s ease opacity, 0.2s ease transform';

test('it creates a valid transition string for the transition property', () => {
  expect(createTransitionString(props)).toBe(transition);
});

test('it creates a valid transition style object', () => {
  expect(createTransitionStyle(props)).toMatchObject({ transition });
});

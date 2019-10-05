interface AnimationProps {
  onState: Function;
  transitionSpeed: string;
  transitionTiming: string;
}

export const createTransitionString = (props: AnimationProps) => {
  const { onState, transitionSpeed, transitionTiming } = props;

  return Object.keys(onState)
    .map((key: string) => `${transitionSpeed}s ${transitionTiming} ${key}`)
    .reduce((a, b) => `${a}, ${b}`);
};

const createTransitionStyle = (props: AnimationProps) => ({
  transition: createTransitionString(props),
});

export default createTransitionStyle;

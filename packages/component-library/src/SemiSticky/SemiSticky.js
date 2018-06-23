/// @flow\
import * as React from 'react';
import withSize from 'react-size-components';

type Props = {
  sizes: {
    isSemiStickyActive: boolean,
  },
  children?: React.Node,
  style: {},
  replaceStyle: {},
  className: string,
  onState: {},
  offState: {},
  transitionSpeed: number,
  transitionTiming:
    | 'ease'
    | 'linear'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'step-start'
    | 'step-end',
};

type State = {
  style: {},
  isSemiStickyActive: boolean,
};

// TODO: Add styles like this ...style ...onState, ...offState, ...replaceStyle

/**
 * Makes a semi sticky component
 * Creates an aside HTML5 element and adds your content inside of it
 * @param {object} style define the styles you want to add to the aside (shallow merge)
 */
class SemiSticky extends React.Component<Props, State> {
  static defaultProps = {
    replaceStyle: {
      position: 'fixed',
      background: 'rgba(0, 0, 0, 0.8)',
      width: '100%',
      top: 0,
      left: 0,
    },
    onState: {
      transform: 'translateY(0)',
    },
    offState: {
      transform: 'translateY(-100px)',
    },
    transitionTiming: 'ease',
    transitionSpeed: 0.25,
  };

  getTransitionString = () => {
    const { onState } = this.props;
    const { transitionSpeed, transitionTiming } = this.props;

    return Object.keys(onState)
      .map((key: string) => `${transitionSpeed}s ${transitionTiming} ${key}`)
      .reduce((a, b) => `${a},${b}`);
  };

  transition = this.getTransitionString();

  style = () => ({
    transition: this.transition,
    ...(this.props.sizes.isSemiStickyActive
      ? this.props.onState
      : this.props.offState),
    ...this.props.replaceStyle,
    ...this.props.style,
  });

  render() {
    return (
      <React.Fragment>
        <div />
        <aside className={this.props.className} style={this.style()}>
          {this.props.children}
        </aside>
      </React.Fragment>
    );
  }
}

type WrapperProps = {
  top: number,
};

/**
 * Essentially just turning a HOC into a child type usage.
 * Extremely Verbose here
 * Need to rewrite size components so you can use it in HOC or other ways
 * @extends React
 */
class HOCWrapper extends React.Component<WrapperProps> {
  static defaultProps = {
    top: 480,
  };

  custom = [
    {
      name: 'isSemiStickyActive',
      fn: (node: HTMLElement) => {
        const top = Math.abs(node.getBoundingClientRect().top);
        return top > this.props.top;
      },
      subscriptions: {
        scroll: true,
        resize: true,
      },
      schema: '',
    },
  ];

  render() {
    const Wrapper = withSize({ custom: this.custom })(SemiSticky);
    return <Wrapper {...this.props} />;
  }
}
export default HOCWrapper;

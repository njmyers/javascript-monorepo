// @ts-nocheck
import * as React from 'react';
import withSize from 'react-size-components';
import createTransitionStyle from '../utils/create-transition-style';

type AnimationProps = {
  /** className applied to the container element */
  className?: string,
  /** css inline styles applied to the on state */
  onState: {},
  /** css inline styles applied to the off state */
  offState: {},
  /** completely replace all styles */
  replaceStyle: {},
  /** shallowly merge styles */
  style?: {},
  /** the speed of the transition */
  transitionSpeed: number,
  /** the transition timing function */
  transitionTiming:
    | 'ease'
    | 'linear'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'step-start'
    | 'step-end',
};

type InheritedProps = {
  /** inherited sizing info */
  sizes: {
    isSemiStickyActive: boolean,
  },
  /** reference from withSize for dom component position/sizing */
  childRef?: HTMLElement,
  /** react children (your component) */
  children?: React.Node,
};

/**
 * Merges the styles according to the boolean flag
 * Creates an aside HTML5 element and adds your content inside of it
 * Also creates an empty div so we have somewhere to measure from
 */
class StyleMerger extends React.Component<InheritedProps & AnimationProps> {
  style = () => ({
    ...createTransitionStyle(this.props),
    ...(this.props.sizes.isSemiStickyActive
      ? this.props.onState
      : this.props.offState),
    ...this.props.replaceStyle,
    ...this.props.style,
  });

  render() {
    return (
      <React.Fragment>
        <div ref={this.props.childRef} />
        <aside className={this.props.className} style={this.style()}>
          {this.props.children}
        </aside>
      </React.Fragment>
    );
  }
}

type WrapperProps = {
  /** distance from the document top to engage the on state styles */
  top: number,
};

type AllProps = WrapperProps & AnimationProps & InheritedProps;

/**
 * SemiSticky is a position aware component that animates in and out on scroll positions.
 * It is inspired by the CSS property `position: sticky` but allows for usage in a much wider variety of situations.
 * SemiSticky uses the AnimationProps for determining it's style. Please see AnimationProps for more information about usage.
 * SemiSticky uses a single prop to determine the scroll position of it's on state.
 * That prop is called `top` and it signifies the amount of pixels from the top of the page that the component should apply it's onState styles.
 * Anything greater then top will apply the onState styles and anything less then top will apply the offState styles.
 * A common usage pattern is for fixed position headers and footers that will show themselves based on a user's scroll position.
 */
class SemiSticky extends React.Component<AllProps> {
  static defaultProps = {
    top: 200,
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

  static displayName = 'SemiSticky';

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
    const Wrapper = withSize({ custom: this.custom })(StyleMerger);
    return <Wrapper {...this.props} />;
  }
}

export default SemiSticky;

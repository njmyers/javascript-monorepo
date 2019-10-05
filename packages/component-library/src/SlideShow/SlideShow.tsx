
import * as React from 'react';
import Icon from '../Icon';
import createTransitionStyle from '../utils/create-transition-style';

export type AnimationProps = {
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

type Props = {
  children?: React.Node,
  /** boolean to determine whether the slideshow starts on mount */
  play: boolean,
  /** boolean to show or hide buttons */
  buttons: boolean,
  /** frame rate in milliseconds */
  frameRate: number,
};

type State = {
  active: number,
  interval: IntervalID | null,
};

class SlideShow extends React.Component<Props & AnimationProps, State> {
  static defaultProps = {
    replaceStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    onState: {
      opacity: 1,
    },
    offState: {
      opacity: 0,
    },
    transitionSpeed: 0.25,
    transitionTiming: 'ease',
    frameRate: 3000,
    play: true,
    buttons: true,
  };

  state = {
    active: 0,
    interval: null,
  };

  next = () => {
    this.setState((state) => ({
      active: (state.active + 1) % this.props.children.length,
    }));
  };

  manualNext = () => {
    this.next();
    this.stop();
    this.start();
  };

  start = () => {
    // always ensure a clear of interval before starting
    this.stop();
    // start the interval
    this.setState({
      interval: setInterval(this.next, this.props.frameRate),
    });
  };

  stop = () => {
    if (this.state.interval) clearInterval(this.state.interval);
  };

  style = (index: number) => ({
    ...createTransitionStyle(this.props),
    ...this.props.replaceStyle,
    ...this.props.style,
    ...(Number(index) === Number(this.state.active)
      ? this.props.onState
      : this.props.offState),
  });

  componentDidMount() {
    if (this.props.play) this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    return (
      <section
        style={{
          position: 'relative',
          margin: 0,
          padding: 0,
        }}
        className={this.props.className}
      >
        {/* <div style={{ position: 'absolute', zIndex: 1 }}>
          <button>
            <div style={{ width: '50px', height: '50px' }}>
              <Icon.Caret direction="right" />
            </div>
          </button>
        </div> */}
        {React.Children.map(this.props.children, (child, index) =>
          React.cloneElement(child, { style: this.style(index) })
        )}
      </section>
    );
  }
}

export default SlideShow;

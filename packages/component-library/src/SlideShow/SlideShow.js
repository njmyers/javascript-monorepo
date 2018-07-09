// @flow
import * as React from 'react';
import Icon from '../Icon';
import createTransitionStyle from '../utils/create-transition-style';

import type { AnimationProps } from '../types';

type Props = {
  children?: React.Node,
  autoplay: boolean,
  buttons: boolean,
  frameRate: number,
};

type State = {
  active: number,
  interval: IntervalID,
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
    frameRate: 3000,
    autoplay: true,
    buttons: true,
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
    this.setState({
      interval: setInterval(this.next, this.props.frameRate),
    });
  };

  stop = () => {
    if (this.state.interval) clearInterval(this.state.interval);
  };

  style = (index: number) => ({
    ...createTransitionStyle(this.props),
    ...(Number(index) === Number(this.state.active)
      ? this.props.onState
      : this.props.offState),
    ...this.props.replaceStyle,
    ...this.props.style,
  });

  componentDidMount() {
    if (this.props.autoplay) this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    return (
      <aside>
        <Icon.Caret direction="left" />
        <Icon.Caret direction="right" />
        {React.Children.map(this.props.children, (child, index) =>
          React.cloneElement(child, { style: this.style(index) })
        )}
      </aside>
    );
  }
}

export default SlideShow;

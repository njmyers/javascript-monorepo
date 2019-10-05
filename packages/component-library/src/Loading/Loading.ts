
import * as React from 'react';
import Modal from '../Modal';
import Icon from '../Icon';

const Circle = Icon.Circle;

type Props = {
  color: string,
  style: {},
  frameRate: number,
  step: number,
  status: 'on' | 'off',
};

type State = {
  one: number,
  two: number,
  three: number,
  interval: IntervalID | null,
};

class Loading extends React.PureComponent<Props, State> {
  static defaultProps = {
    color: 'rgba(0, 0, 0, 1)',
    style: {
      width: '10px',
      height: '10px',
    },
    frameRate: 10,
    step: 2,
  };

  state = {
    one: 100,
    two: 100,
    three: 100,
    interval: null,
  };

  containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
  };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  reset = ({ one, two, three }: State) =>
    one >= 100 && two >= 100 && three >= 100
      ? { one: 0, two: 0, three: 0 }
      : null;

  count = ({ one, two, three }: State) => ({
    one: one < 100 ? one + this.props.step : one,
    two: one >= 100 ? two + this.props.step : two,
    three: two >= 100 ? three + this.props.step : three,
  });

  frame = () => {
    this.setState(this.count);
    this.setState(this.reset);
  };

  start = () => {
    this.setState({
      interval: setInterval(this.frame, this.props.frameRate),
    });
  };

  stop = () => {
    if (this.state.interval) clearInterval(this.state.interval);
    this.setState({
      interval: null,
    });
  };

  computeStyle = (num: number) => ({ ...this.props.style, opacity: num / 100 });

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      if (this.props.status === 'off') {
        this.stop();
      } else {
        this.start();
      }
    }
  }

  render() {
    return (
      <Modal status={this.props.status}>
        <div style={this.containerStyle}>
          <div style={this.computeStyle(this.state.one)}>
            <Circle color={this.props.color} />
          </div>
          <div style={this.computeStyle(this.state.two)}>
            <Circle color={this.props.color} />
          </div>
          <div style={this.computeStyle(this.state.three)}>
            <Circle color={this.props.color} />
          </div>
        </div>
      </Modal>
    );
  }
}

export default Loading;

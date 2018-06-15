// @flow
import * as React from 'react';
import withSize from 'react-size-components';
import BEM from '../BEM';
import StatusSwitch from '../StatusSwitch';

type Props = {
  src: string,
  placeholder: string,
  sizes: {
    inView: boolean,
  },
  block: string,
  ratio: number,
  style: {},
  containerStyle: {},
};

type State = {
  status: 'initial' | 'loading' | 'resolved' | 'error',
};

class LazyImage extends React.Component<Props, State> {
  static defaultProps = {
    ratio: 1 / 1,
    containerStyle: {
      position: 'relative',
      height: '400px',
      width: '400px',
      overflow: 'hidden',
    },
    style: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transition: '0.25s opacity',
    },
  };

  state = {
    status: 'initial',
  };

  image: ?HTMLImageElement;
  placeholder: ?HTMLImageElement;

  componentDidMount() {
    if (!this.props.src) {
      throw new Error('You must supply a src to <LazyImage />');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.status === 'initial') {
      if (this.props.sizes.inView && !prevProps.sizes.inView) {
        this.loadImage(this.props.placeholder, this.placeholder);
        this.loadImage(this.props.src, this.image);
      }
    }
  }

  loading = ({ status }) =>
    status === 'initial' ? { status: 'loading' } : null;

  resolved = ({ status }) =>
    status === 'resolved' ? { status: 'resolved' } : null;

  loadImage = (src, ref) => {
    ref.src = src;
    this.setState(this.loading);
  };

  onLoad = (event) => {
    this.setState(this.resolved);
  };

  placeholderStyle = () => {
    return this.state === 'resolved'
      ? {
          ...this.props.style,
          opacity: 1,
        }
      : {
          ...this.props.style,
          opacity: 0,
        };
  };

  imageStyle = () => {
    return this.state === 'resolved'
      ? {
          ...this.props.style,
          opacity: 0,
        }
      : {
          ...this.props.style,
          opacity: 1,
        };
  };

  render() {
    return (
      <div element="container" style={this.props.containerStyle}>
        <img
          element="image"
          name="image"
          style={this.imageStyle()}
          ref={(element) => (this.image = element)}
          onLoad={this.onLoad}
        />
        <img
          element="placeholder"
          name="placeholder"
          style={this.placeholderStyle()}
          ref={(element) => (this.placeholder = element)}
        />
      </div>
    );
  }
}

export default withSize({ inView: true })(LazyImage);

// @flow
import * as React from 'react';
import withSize from 'react-size-components';
import BEM from '../BEM';

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
      overflow: 'hidden',
    },
    afterStyle: {
      display: 'block',
      content: '""',
      width: '100%',
    },
    style: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
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
      console.log(this.props.sizes);
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
          filter: 'blur(10px)',
          opacity: 1,
        }
      : {
          ...this.props.style,
          filter: 'blur(10px)',
          opacity: 1,
        };
  };

  imageStyle = () => {
    return this.state === 'resolved'
      ? {
          ...this.props.style,
          transition: '0.25s opacity',
          opacity: 0,
        }
      : {
          ...this.props.style,
          transition: '0.25s opacity',
          opacity: 1,
        };
  };

  afterStyle = () => ({
    ...this.props.afterStyle,
    paddingTop: `${this.props.sizes.component.width / this.props.ratio}px `,
  });

  render() {
    return (
      <BEM block={this.props.block}>
        <div element="container" style={this.props.containerStyle}>
          <div element="containerAfter" style={this.afterStyle()}>
            <img
              element="placeholder"
              name="placeholder"
              style={this.placeholderStyle()}
              ref={(element) => (this.placeholder = element)}
            />
            <img
              element="image"
              name="image"
              style={this.imageStyle()}
              ref={(element) => (this.image = element)}
            />
          </div>
        </div>
      </BEM>
    );
  }
}

export default withSize({ inView: true, component: true })(LazyImage);

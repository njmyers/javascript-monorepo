// @flow
import * as React from 'react';

type Props = {
  src: string,
  placeholder: string,
  onClick?: Function,
  name?: string,
  // meta data
  alt?: string,
  title?: string,
  // style components
  placeholderStyle: {},
  imageStyle: {},
  containerStyle: {},
};

type State = {
  status: 'initial' | 'loading' | 'resolved' | 'error',
};

const baseStyles = {
  margin: 0,
  padding: 0,
  width: '100%',
  height: 'auto',
};

// https://stackoverflow.com/questions/31444891/mystery-white-space-underneath-image-tag/31445364#31445364
// for more information on image tag and the mystery white space
/**
 * Lazily loads images with fade in
 * @extends React
 */
class LazyImage extends React.Component<Props, State> {
  static defaultProps = {
    containerStyle: {
      ...baseStyles,
      position: 'relative',
      overflow: 'hidden',
      // fix for image element whitespace
      lineHeight: 0,
    },
    imageStyle: {
      ...baseStyles,
    },
    placeholderStyle: {
      ...baseStyles,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      objectFit: 'contain',
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

    this.loadImage(this.props.placeholder, this.placeholder);
    this.loadImage(this.props.src, this.image);
  }

  loading = ({ status }: State) =>
    status !== 'resolved' ? { status: 'loading' } : null;

  resolved = ({ status }: State) =>
    status !== 'resolved' ? { status: 'resolved' } : null;

  loadImage = (src: string, ref: ?HTMLImageElement) => {
    ref.src = src;
    this.setState(this.loading);
  };

  placeholderStyle = () => ({
    ...this.props.placeholderStyle,
    opacity: this.state.status === 'resolved' ? 0 : 1,
  });

  metaData = (str: string | void) => (str ? `${str} placeholder` : '');

  render() {
    return (
      <div
        style={this.props.containerStyle}
        name={this.props.name}
        onClick={this.props.onClick}
      >
        <img
          name={this.props.name}
          style={this.placeholderStyle()}
          ref={(element) => (this.placeholder = element)}
          alt={this.metaData(this.props.alt)}
          title={this.metaData(this.props.title)}
        />
        <img
          name={this.props.name}
          style={this.props.imageStyle}
          ref={(element) => (this.image = element)}
          onLoad={() => this.setState(this.resolved)}
          alt={this.props.alt}
          title={this.props.title}
        />
      </div>
    );
  }
}

export default LazyImage;

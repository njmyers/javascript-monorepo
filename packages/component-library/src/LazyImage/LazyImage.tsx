// @ts-nocheck

import * as React from 'react';

type Props = {
  /** high-res image src */
  src: string,
  /** placeholder image src */
  placeholder: string,
  /** pass-thru onclick function */
  onClick?: Function,
  /** name attribute for onclick events */
  name?: string,
  /** pass-thru alt tag for image */
  alt?: string,
  /** pass-thru title tag for image */
  title?: string,
  /** shallow merge of styles applied to the placeholder */
  placeholderStyle: {},
  /** shallow merge of styles applied to the highres */
  imageStyle: {},
  /** shallow merge of styles applied to the container */
  containerStyle: {},
  /** class name applied to the components in BEM style */
  className: string,
  /** base styles applied to all elements */
  baseStyles: {},
};

type State = {
  status: 'initial' | 'loading' | 'resolved' | 'error',
};

// https://stackoverflow.com/questions/31444891/mystery-white-space-underneath-image-tag/31445364#31445364
// for more information on image tag and the mystery white space
/**
 * Lazily loads images with fade in
 * @extends React
 */
class LazyImage extends React.Component<Props, State> {
  static defaultProps = {
    baseStyles: {
      margin: 0,
      padding: 0,
      width: '100%',
      height: 'auto',
      backfaceVisibility: 'inherit',
    },
    containerStyle: {
      position: 'relative',
      overflow: 'hidden',
      // fix for image element whitespace
      lineHeight: 0,
    },
    imageStyle: {},
    placeholderStyle: {
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

  image?: HTMLImageElement;
  placeholder?: HTMLImageElement;

  componentDidMount() {
    if (!this.props.src) {
      throw new Error('You must supply a src to <LazyImage />');
    }

    this.loadImage(this.props.placeholder, this.placeholder);
    this.loadImage(this.props.src, this.image);
  }

  /**
   * Allows for dynamic reset of img src
   * @param  {[type]} prevProps [description]
   * @return {[type]}           [description]
   */
  componentDidUpdate(prevProps: Props) {
    if (this.props.src !== prevProps.src) {
      // reset component lifecycle
      this.setState({ status: 'initial' });
      // set both srcs to empty to prevent flashes
      this.placeholder.src = '';
      this.image.src = '';
      // start loading process
      this.loadImage(this.props.placeholder, this.placeholder);
      this.loadImage(this.props.src, this.image);
    }
  }

  loading = ({ status }: State) =>
    status !== 'resolved' ? { status: 'loading' } : null;

  resolved = ({ status }: State) =>
    status !== 'resolved' ? { status: 'resolved' } : null;

  loadImage = (src: string, ref?: HTMLImageElement) => {
    ref.src = src;
    this.setState(this.loading);
  };

  placeholderStyle = () => ({
    ...this.props.baseStyles,
    ...this.props.placeholderStyle,
    opacity: this.state.status === 'resolved' ? 0 : 1,
  });

  imageStyle = () => ({
    ...this.props.baseStyles,
    ...this.props.imageStyle,
  });

  containerStyle = () => ({
    ...this.props.baseStyles,
    ...this.props.containerStyle,
  });

  metaData = (str: string | void) => (str ? `${str} placeholder` : '');

  render() {
    return (
      <div
        style={this.containerStyle()}
        className={this.props.className ? `${this.props.className}` : null}
        name={this.props.name}
        onClick={this.props.onClick}
      >
        <img
          style={this.placeholderStyle()}
          className={
            this.props.className ? `${this.props.className}_placeholder` : null
          }
          name={this.props.name}
          ref={(element) => (this.placeholder = element)}
          alt={this.metaData(this.props.alt)}
          title={this.metaData(this.props.title)}
        />
        <img
          style={this.imageStyle()}
          className={
            this.props.className ? `${this.props.className}_img` : null
          }
          name={this.props.name}
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

// @flow
import * as React from 'react';

type Props = {
  style: {},
  replaceStyle: {},
  className: string,
  children?: React.Node,
};

class Modal extends React.PureComponent<Props> {
  static defaultProps = {
    style: {
      background: 'rgba(255, 255, 255, 0.8)',
    },
    replaceStyle: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  // shallow merge
  style = () => ({
    ...this.props.replaceStyle,
    ...this.props.style,
  });

  render() {
    return (
      <aside style={this.style()} className={this.props.className}>
        {this.props.children}
      </aside>
    );
  }
}

export default Modal;

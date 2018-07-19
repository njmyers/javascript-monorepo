// @flow
import * as React from 'react';

type Props = {
  /** the children to widtherize */
  children?: React.Node,
  /** className applied to the container element */
  className?: string,
  /** completely replace all styles */
  replaceStyle: {},
  /** shallowly merge styles */
  style?: {},
};

class WidthText extends React.PureComponent<Props> {
  static defaultProps = {
    text: 'I fit my container width!',
    replaceStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
  };

  style = () => ({
    ...this.props.replaceStyle,
    ...this.props.style,
  });

  render() {
    return React.Children.map(this.props.children, (child) =>
      React.cloneElement(
        child,
        {
          ...child.props,
          style: this.style(),
          className: this.props.className,
        },
        child.props.children
          .split('')
          .map((letter, i) => <span key={i}>{letter}</span>)
      )
    );
  }
}

export default WidthText;

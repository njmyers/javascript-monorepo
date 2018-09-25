import * as React from 'react';
import withSize from 'react-size-components';
// assets
import './library';
// styles
import './audio.sass';
import './range.sass';

class AudioCore extends React.Component {
  render() {
    return (
      <aside
        ref={this.props.childRef}
        className={`${this.props.classPrefix}_container`}
      >
        <div className={this.props.classPrefix}>
          {React.Children.toArray(this.props.children).map((child) =>
            React.cloneElement(child, {
              classPrefix: this.props.classPrefix,
              sizes: this.props.sizes,
            })
          )}
        </div>
      </aside>
    );
  }
}

export default withSize({ component: true, mobile: true })(AudioCore);

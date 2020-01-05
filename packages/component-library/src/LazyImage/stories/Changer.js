import React from 'react';
import LazyImage from '../LazyImage';

import src from './stock.jpg';
import placeholder from './stock-small.jpg';

import otherSrc from './other-stock.jpg';
import otherPlaceholder from './other-stock-small.jpg';

class Changer extends React.Component {
  state = {
    src,
    placeholder,
    toggle: true,
  };

  onClick = () => {
    this.setState(state => ({
      src: !state.toggle ? src : otherSrc,
      placeholder: !state.toggle ? placeholder : otherPlaceholder,
      toggle: !state.toggle,
    }));
  };

  render() {
    return (
      <section>
        <LazyImage src={this.state.src} placeholder={this.state.placeholder} />
        <button onClick={this.onClick}>Next Photo</button>
      </section>
    );
  }
}

export default Changer;

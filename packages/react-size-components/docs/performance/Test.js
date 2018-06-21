import React, { Component } from 'react';
import debounce from 'lodash/debounce';

class Test extends Component {
  constructor(props) {
    super(props);
    this.resized = debounce(this.resized.bind(this), 400);
  }

  resized() {
    console.log('resized');
  }

  componentDidMount() {
    window.addEventListener('resize', this.resized);
  }

  render() {
    return null;
  }
}

export default Test;

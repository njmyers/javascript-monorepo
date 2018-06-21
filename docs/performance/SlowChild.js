import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash/debounce';

class SlowChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
    };

    this.measureToState = debounce(this.measureToState.bind(this), 400);
  }

  getMeasurements = () => {
    const boundingRect = this.DOMNode
      ? this.DOMNode.getBoundingClientRect()
      : {};
    // transform to regular js object for comparisons by react downstream
    return { height: boundingRect.height, width: boundingRect.width };
  };

  measureToState() {
    const { height, width } = this.getMeasurements();
    this.setState({ height, width });
  }

  componentDidMount() {
    this.DOMNode = ReactDOM.findDOMNode(this);
    this.measureToState();
    window.addEventListener('resize', this.measureToState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.measureToState);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Child Component</h2>
        <li>My width is: {this.state.width}</li>
        <li>My height is: {this.state.height}</li>
      </React.Fragment>
    );
  }
}

export default SlowChild;

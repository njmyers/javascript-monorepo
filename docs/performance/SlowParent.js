import React, { Component } from 'react';
import SlowChild from './SlowChild';
import AnotherChild from './AnotherChild';

class SlowParent extends Component {
  // componentWillMount() {
  //     this.props.timeStamp(Date.now());
  // }

  // componentDidMount() {
  //     this.props.timeStamp(Date.now());
  // }

  // componentDidUpdate() {
  //     this.props.timeStamp(Date.now());
  // }

  componentWillReceiveProps() {
    this.time = Date.now();
  }

  componentDidUpdate() {
    this.props.timeStamp(Date.now() - this.time);
  }

  render() {
    return (
      <div>
        <h1>SlowParent Component</h1>
        <li>Lots of size aware components...</li>
        <SlowChild />
        <AnotherChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
        <SlowChild />
      </div>
    );
  }
}

export default SlowParent;

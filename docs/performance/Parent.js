import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
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
        <h1>Parent Component</h1>
        <li>Lots of size aware components...</li>
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
        <Child />
      </div>
    );
  }
}

export default Parent;

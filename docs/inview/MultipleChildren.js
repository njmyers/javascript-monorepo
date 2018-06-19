import React, { Component } from 'react';
import Child from './Child';
import { uniq } from 'smalldash';

class MultipleChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
    };
  }

  onView = (sizes) => {
    this.state.sizes.forEach((current) => {
      if (current.id === sizes.id) {
        if (current.inView !== sizes.inView) {
          this.props.action({ id: sizes.id, inView: sizes.inView });
        }
      }
    });

    this.setState({
      sizes: uniq([sizes, ...this.state.sizes], (obj) => obj.id),
    });
  };

  render() {
    return (
      <React.Fragment>
        <Child onSize={this.onView} id="1" />
        <Child onSize={this.onView} id="2" />
        <Child onSize={this.onView} id="3" />
        <Child onSize={this.onView} id="4" />
        <Child onSize={this.onView} id="5" />
        <Child onSize={this.onView} id="6" />
        <Child onSize={this.onView} id="7" />
      </React.Fragment>
    );
  }
}

export default MultipleChildren;

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
        <Child onSize={this.onView} id="8" />
        <Child onSize={this.onView} id="9" />
        <Child onSize={this.onView} id="10" />
        <Child onSize={this.onView} id="11" />
        <Child onSize={this.onView} id="12" />
        <Child onSize={this.onView} id="13" />
        <Child onSize={this.onView} id="14" />
        <Child onSize={this.onView} id="15" />
        <Child onSize={this.onView} id="16" />
        <Child onSize={this.onView} id="17" />
        <Child onSize={this.onView} id="18" />
        <Child onSize={this.onView} id="19" />
        <Child onSize={this.onView} id="20" />
        <Child onSize={this.onView} id="21" />
        <Child onSize={this.onView} id="22" />
        <Child onSize={this.onView} id="23" />
        <Child onSize={this.onView} id="24" />
        <Child onSize={this.onView} id="25" />
        <Child onSize={this.onView} id="26" />
        <Child onSize={this.onView} id="27" />
        <Child onSize={this.onView} id="28" />
        <Child onSize={this.onView} id="29" />
        <Child onSize={this.onView} id="30" />
        <Child onSize={this.onView} id="31" />
        <Child onSize={this.onView} id="32" />
        <Child onSize={this.onView} id="33" />
        <Child onSize={this.onView} id="34" />
        <Child onSize={this.onView} id="35" />
        <Child onSize={this.onView} id="36" />
      </React.Fragment>
    );
  }
}

export default MultipleChildren;

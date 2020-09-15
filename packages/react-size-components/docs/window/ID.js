import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      called: 0,
      sizes: [],
    };
  }

  onSize = sizes => {
    this.setState({
      called: this.state.called + 1,
      sizes: [...this.state.sizes, sizes],
    });

    this.props.onSize(sizes);
  };

  render() {
    return (
      <div>
        <h2 className="h2-roboto">Parent Component</h2>
        <li>I can do something cool with these callbacks...</li>
        {this.state.sizes.map((size, index) => {
          return (
            <React.Fragment>
              <h3>
                Callback #{index + 1} from {size.id}
              </h3>
              <li>My window inner width is: {size.window.innerWidth}</li>
              <li>My window inner height is: {size.window.innerHeight}</li>
              <li>My window outer width is: {size.window.outerWidth}</li>
              <li>My window outer height is: {size.window.outerHeight}</li>
            </React.Fragment>
          );
        })}
        <Child id="window-size-child" onSize={this.onSize} />
      </div>
    );
  }
}

export default Parent;

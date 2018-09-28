import React, { Component } from 'react';
import Child from './Child';

class ID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      called: 0,
      sizes: [],
    };
  }

  onSize = (sizes) => {
    this.setState({
      called: this.state.called + 1,
      sizes: [...this.state.sizes, sizes],
    });

    this.props.onSize(sizes);
  };

  render() {
    return (
      <div>
        <h2 className="h2">Parent Component</h2>
        <li className="li-1">
          I can do something cool with these callbacks...
        </li>
        {this.state.sizes.map((size, index) => {
          return (
            <React.Fragment key={index}>
              <h4 className="h4">
                Callback #{index + 1} from {size.id}
              </h4>
              <li className="li-1">height: {size.component.height}</li>
              <li className="li-1">width: {size.component.width}</li>
            </React.Fragment>
          );
        })}
        <Child id="component-size-child" onSize={this.onSize} />
      </div>
    );
  }
}

export default ID;

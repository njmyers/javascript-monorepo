import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import Child from './Child';

class Debounce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      called: 0,
      sizes: [],
    };

    this.onSize = debounce(this.onSize.bind(this), 500);
  }

  onSize(sizes) {
    this.setState({
      called: this.state.called + 1,
      sizes: [...this.state.sizes, sizes],
    });

    this.props.onSize(sizes);
  }

  render() {
    return (
      <div>
        <h2 className="h2-roboto">Parent Component</h2>
        <li className="li-roboto-1">
          I can do something cool with these callbacks...
        </li>
        {this.state.sizes.map((size, index) => {
          return (
            <React.Fragment key={index}>
              <h4 className="h4-roboto">Callback #{index + 1}</h4>
              <li className="li-roboto-1">height: {size.component.height}</li>
              <li className="li-roboto-1">width: {size.component.width}</li>s
            </React.Fragment>
          );
        })}
        <Child onSize={this.onSize} />
      </div>
    );
  }
}

export default Debounce;

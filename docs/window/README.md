## Window Sizing

<!-- STORY -->

RSC can also measure the browser window. You may be asking why use RSC to measure the browser window when you can just call `window.innerHeight` and be done? There are a few reasons and if they apply to your situation then they are very good reasons. If they don't then you should most certainly just call `window.innerHeight`

1.  You want to compare the window sizes to another piece of data already found in RSC
2.  You want to subscribe to the window size and listen for changes
3.  You don't want to spam the browser with multiple resize or scroll event listeners
4.  You need to isolate window calls into React lifecycle methods to support SSR
5.  You want to use my super cool component

### Using as Child

If you need a window aware component call the Size function with the configuration object `{ measureWindow: true }`. The window sizes will be added to props and be made available to your component in `props.sizes.window`

```js
import React from 'react';
import Size from 'react-size-components';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <li>My window inner width is: {sizes.window.innerWidth}</li>
      <li>My window inner height is: {sizes.window.innerHeight}</li>
      <li>My window outer width is: {sizes.window.outerWidth}</li>
      <li>My window outer height is: {sizes.window.outerHeight}</li>
    </React.Fragment>
  );
};

export default Size({ measureWindow: true })(Child);
```

### Using as Parent

Once again you can give control of the window size data to the parent by providing a callback. I can't think of a situation where you would need to sort different window sizes but you could also inject an id if you needed it.

```js
// in another file
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
        <h1>Parent Component</h1>
        <li>I can do something cool with these callbacks...</li>
        {this.state.sizes.map((size, index) => {
          return (
            <React.Fragment key={index}>
              <h3>Callback #{index + 1}</h3>
              <li>My window inner width is: {size.window.innerWidth}</li>
              <li>My window inner height is: {size.window.innerHeight}</li>
              <li>My window outer width is: {size.window.outerWidth}</li>
              <li>My window outer height is: {size.window.outerHeight}</li>
            </React.Fragment>
          );
        })}
        <Child onSize={this.onSize} />
      </div>
    );
  }
}

export default Parent;
```

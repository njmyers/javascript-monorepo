## Basic Component Sizing

<!-- STORY -->

The most basic usage of Size is to measure a component's width and height. To use all you have to do is pass in the component flag.

`{ component: true }`

### Using as Child

We use the Size function as a HOC by first passing in our configuration object and then the component we would like to have size information for.

```js
import React from 'react';
import Size from 'react-size-components';

const Child = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <p>My width is: {sizes.component.width}</p>
            <p>My height is: {sizes.component.height}</p>
        </React.Fragment>
    );
};

export default Size({ component: true })(Child);
```

### Using as Parent

Here we specify an onSize callback function as a prop to our child component. This functions takes a single object as argument and contains all of the same data that would normally be passed onto the child component.

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
    };

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <p>I can do something cool with these callbacks...</p>
                {this.state.sizes.map((size, index) => {
                    return (
                        <React.Fragment>
                            <h3>Callback #{index + 1}</h3>
                            <span>height: {size.component.height}</span>{' '}
                            <span>width: {size.component.width}</span>
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

### Using as Parent with ID

```js
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <p>I can do something cool with these callbacks...</p>
                {this.state.sizes.map((size, index) => {
                    return (
                        <React.Fragment>
                            <h3>Callback #{index + 1}</h3>
                            <span>height: {size.component.height}</span>{' '}
                            <span>width: {size.component.width}</span>
                        </React.Fragment>
                    );
                })}
                <Child id="child-component-sizer" onSize={this.onSize} />
            </div>
        );
    }
```

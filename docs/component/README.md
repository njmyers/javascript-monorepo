## Component Sizing

Component sizing is probably the most frequent use of RSC. It is helpful anytime you need to know the height and/or width of a component. RSC takes care of ensuring your node is available, measuring the node, subscribing to future size changes and finally making that data available to you.

<!-- STORY -->

### Using as Child

Creating a size aware child component is the simplest usage of RSC. Call the Size function by first passing in the configuration object and then the component you would like to have size data on. The sizes object will be added to props and made available in your component in `props.sizes.component`

```js
import React from 'react';
import Size from 'react-size-components';

const Child = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <li>My width is: {sizes.component.width}</li>
            <li>My height is: {sizes.component.height}</li>
        </React.Fragment>
    );
};

export default Size({ component: true })(Child);
```

### Using as Parent

Here we give control of the size data to the parent by passing the callback function `onSize` as a prop to the wrapped component. This function takes a single object as an argument that contains all of the same data that would normally be passed onto the child component.

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
                            <li>height: {size.component.height}</li>
                            <li>width: {size.component.width}</li>
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

Here we inject an id into our callback. This is helpful if you have multiple sized components being controlled from a single parent and you need to process their data differently.

```js
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <li>I can do something cool with these callbacks...</li>
                {this.state.sizes.map((size, index) => {
                    return (
                        <React.Fragment>
                            <h3>
                                Callback #{index + 1} from {size.id}
                            </h3>
                            <li>height: {size.component.height}</li>
                            <li>width: {size.component.width}</li>
                        </React.Fragment>
                    );
                })}
                <Child id="component-size-child" onSize={this.onSize} />
            </div>
        );
    }
```

### Debounce Callbacks

The above usages may be too much data for your parent. Improve performance by debouncing the `onSize` callback function.

```js
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
```

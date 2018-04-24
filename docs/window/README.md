## Basic Window Sizing

<!-- STORY -->

### Using as Child

Here we pass in our size configuration object and then the component that needs access to the window sizes.

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

Here we use a child to measure the window sizes but use a callback to control and process the data. You can also inject an ID here but it wouldn't be very useful as there is only one window!

```js
// in another file
import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
    }

    handleSize = (sizes) => {
        // do something with styles
        console.log(sizes);
        // window: {
        //     innerHeight: number;
        //     innerWidth: number;
        //     outerHeight: number;
        //     outerWidth: number;
        // }
    };

    render() {
        return <Wrapped onSize={this.handleSize} />;
    }
}
```

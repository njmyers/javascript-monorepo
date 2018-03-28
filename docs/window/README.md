## Basic Window Sizing

<!-- STORY -->

### Using as Child

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

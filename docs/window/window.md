## Basic Window Sizing

### Using as Child

```js
import React from 'react';
import Size from 'react-size-components';

const Child = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <p>My window inner width is: {sizes.window.innerWidth}</p>
            <p>My window inner height is: {sizes.window.innerHeight}</p>
            <p>My window outer width is: {sizes.window.outerWidth}</p>
            <p>My window outer height is: {sizes.window.outerHeight}</p>
        </React.Fragment>
    );
};

export default Size({ measureWindow: true, measureComponent: false })(Child);
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

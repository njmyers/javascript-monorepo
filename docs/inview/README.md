## InView Placement Aware Components

<!-- STORY -->

### Using as Child

Now your components can not only be aware of their size but they can also be aware of their placement on the page. The component listens for scroll actions and updates the flag according to whether or not it is viewable in the current browser window.

To access simply add the inView flag to the configuration object and inView will be accessible in the sizes prop.

`{ inView: true }`

```js
import React from 'react';
import Size from 'react-size-components';

const Child = ({ sizes, id = 'undefined' } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <li>My id is: {id}</li>
            <li>I am in view: {sizes.inView.toString()}</li>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus sapiente
                quasi, dolores porro libero dolore perspiciatis itaque! Esse tempora reiciendis,
                voluptates non perferendis ab quasi doloremque dolorum consectetur dolor.
            </p>
        </React.Fragment>
    );
};

export default Size({ inView: true })(Child);
```

### Using in a List of Position Aware Children

This feature can be used for infinite scrolling pages and updating routes or other data based on the current scroll position. Inject an ID into the callback so that the new inView data received can be processed by the parent component.

```js
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
            </React.Fragment>
        );
    }
}

export default MultipleChildren;
```


# React Size Components

<!-- STORY -->

## About

React Size Components (RSC) is a small and lightweight library for measuring and monitoring the size and position of your components in relation to the browser window. It is a versatile HOC that wraps your component and makes available only the size data that you request for your particular component.

Listening to browser events like resize and scroll can be intensive tasks, so RSC Uses the a subscribe/publish method of listening. This means there is only one event listener for all of your sized components.

Comparing measurements can also be very intensive tasks so RSC uses PureComponents and never mutates it's internal state. The props that gets passed down will come as quickly as possible so your component can provide a responsive user experience. The core of RSC uses request animation frames so that components are aware of there size as they are being changed by the user. Of course you can always debounce later for even more performance!

RSC supports creating custom props in addition to the props that are available by default. It also makes available the subscription objects referenced above so you can subscribe to window events for improved performance.

RSC aims to supports SSR (Server Side Rendering). No references the window object are made until the `componentDidMount` lifecycle method. All listeners are lazily subscribed to when they become available. As SSR is very complex I would appreciate any feedback that you have regarding this feature. For a demonstration of SSR capabilities clone this [repository](https://github.com/njmyers/react-size-components) and run the command `npm run start-ssr`.

## Installation

To add RSC to your project, run one of the following commands in your project root.

`npm install react-size-components --save`
`yarn add react-size-components`

Now you can use the package in your project.

```js
const Size = require('react-size-components');
/// or
import Size from 'react-size-components';
```

#### Note

If you are reading this on GitHub, trying browsing the [interactive demo](https://njmyers.github.io/react-size-components) created using [storybook](https://storybook.js.org). I think you will find it much easier to understand what is happening!

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc -->

- [Component Sizing](#component-sizing)
  - [Using as Child](#using-as-child)
  - [Using as Parent](#using-as-parent)
  - [Using as Parent with ID](#using-as-parent-with-id)
  - [Debounce Callbacks](#debounce-callbacks)
- [Window Sizing](#window-sizing)
  - [Using as Child](#using-as-child-1)
  - [Using as Parent](#using-as-parent-1)
- [Mobile Detection](#mobile-detection)
  - [Using as Child](#using-as-child-2)
  - [Using as Parent](#using-as-parent-2)
- [Basic Orientation Detection](#basic-orientation-detection)
- [InView Placement Aware Components](#inview-placement-aware-components)
  - [Using as Child](#using-as-child-3)
  - [Using in a List of Position Aware Children](#using-in-a-list-of-position-aware-children)
- [Advanced Features](#advanced-features)
  - [Creating Custom Flags](#creating-custom-flags)
  - [Using Custom with onSize Callback](#using-custom-with-onsize-callback)
  - [Notes for Custom Functions](#notes-for-custom-functions)
  - [Advanced Custom Flags](#advanced-custom-flags)
- [Performance](#performance)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
                        <React.Fragment key={index}>
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

## Mobile Detection

RSC also can make your components aware of mobile breakpoints. Helpful for rendering different views based on screen sizes.

<!-- STORY -->

### Using as Child

To use call the Size function with a configuration object containing the mobile boolean and an optional breakpoint.

`{ mobile: true, breakpoint: 1000 }`

Breakpoint will default to 768 if unspecified.

```js
import React from 'react';
import Size from 'react-size-components';

const Child = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <li>Am I mobile: {sizes.mobile.toString()}</li>
            <li>My breakpoint is: {sizes.breakpoint}</li>
        </React.Fragment>
    );
};

export default Size({ mobile: true, breakpoint: 1000 })(Child);
```

### Using as Parent

Same as component and window sizing examples. Inject your ID's and/or debounce to process your data if need be.

## Basic Orientation Detection

Screen size is not the only variable that can affect your view. Screen orientation has a large role in determining how your view should look and RSC also takes care of this.

<!-- STORY -->

To use all you have to do is pass in the orientation boolean on the Size configuration object.

`{ orientation: true }`

```js
import React from 'react';
import Size from 'react-size-components';

const Child = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <h2>Child Component</h2>
            <li>My orientation is: {sizes.orientation}</li>
        </React.Fragment>
    );
};

export default Size({ orientation: true })(Child);
```

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

## Advanced Features

<!-- STORY -->

### Creating Custom Flags

We can also create custom flags based on comparison functions. Pass in an array of comparisons and each one will be added to sizes props. Please see below code for documentation on using custom flags and functions.

```js
import React from 'react';
import Size from 'react-size-components';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <li>
        My custom flag isBiggerThan1000 is: {sizes.isBiggerThan1000.toString()}
      </li>
      <li>
        My custom flag isBiggerThan1200 is: {sizes.isBiggerThan1200.toString()}
      </li>
    </React.Fragment>
  );
};

const isBiggerThan1000 = (sizes) =>
  sizes.window ? sizes.window.innerWidth > 1000 : undefined;
const isBiggerThan1200 = (sizes) =>
  sizes.window ? sizes.window.innerWidth > 1200 : undefined;

const custom = [
  {
    name: 'isBiggerThan1000',
    fn: isBiggerThan1000,
  },
  {
    name: 'isBiggerThan1200',
    fn: isBiggerThan1200,
  },
];

export default Size({ measureWindow: true, custom })(Child);
```

### Using Custom with onSize Callback

This will work. All custom props are also passed to the onSize callback.

### Notes for Custom Functions

Please be aware that you must manually turn on whichever flags your comparison functions depend on. If you write a configuration like this it will not work.

```js
const isBiggerThan1000 = (sizes) =>
  sizes.window ? sizes.window.innerWidth > 1000 : undefined;

const custom = [
  {
    name: 'isBiggerThan1000',
    fn: isBiggerThan1000,
  },
];

// uh oh no window measuring has taken place :(
export default Size({ custom })(Child);
```

### Advanced Custom Flags

I have also exposed functionality to create advanced custom flags. You can write your own flags that depend on subscriptions themselves rather then pre-existing size data. This extends the functionality of this component to the point that you could rewrite all of the components and inject them as advanced modules. All you have to do is write comparator functions and a schema for the data that you would like to introduce. The sky is the limit!

Advanced mode is turned on by adding a subscriptions object and/or a schema object to your custom attribute. When advanced mode is turned on the DOM node itself is made available (safely) to the comparator function. That is why we must use a schema object so that our initial state looks like the state that is returned from the comparator.

```js
import React from 'react';
import Size from 'react-size-components';

const Advanced = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Advanced Child Component</h2>
      <li>My position from the top is: {sizes.position.top}</li>
      <li>My position from the bottom is: {sizes.position.bottom}</li>
    </React.Fragment>
  );
};

const calculatePosition = (sizes, node) => {
  const rect = node.getBoundingClientRect();
  return {
    top: Math.round(rect.top),
    bottom: Math.round(rect.bottom),
  };
};

const schema = {
  top: 0,
  bottom: 0,
};

const custom = [
  {
    name: 'position',
    fn: calculatePosition,
    subscriptions: {
      resize: true,
      scroll: true,
    },
    schema,
  },
];

export default Size({ custom })(Advanced);
```

Now our component knows exactly where it is on the page!

## Performance

This document has yet to be written.

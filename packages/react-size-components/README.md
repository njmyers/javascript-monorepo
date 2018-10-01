
# React Size Components

<!-- STORY -->

## About

React Size Components (RSC) is a small and lightweight react component for measuring and monitoring the size and position of your components in relation to the page. It is a versatile HOC that wraps your component and makes available only the size data that you request for your particular component, when you need it. Sizing data can be accessed by the component itself or passed back to parent components by use of a callback function.

Listening to browser events like resize and scroll can be intensive tasks, so RSC uses the a subscribe/publish method of listening. This means there is only one event listener for all of your sized components. You can subscribe to multiple window scroll events on one page and not destroy your performance!

Comparing measurements can also be very intensive tasks so RSC uses a cusom object comparison function that is optimized for speed. The props that gets passed down will come as quickly as possible so your component can provide a responsive user experience. The core of RSC uses request animation frames so that components are aware of their size as they are being changed by the user. Of course you can always debounce later for even more performance!

RSC supports SSR (Server Side Rendering). No references to the window object are made prior to the `componentDidMount` lifecycle method. All window listeners are lazily subscribed to when they become available. This means you can use RSC with your JAM stack as a drop-in replacement for many other popular React based sizing components that don't support SSR. For a demonstration of SSR capabilities clone this [repository](https://github.com/njmyers/react-size-components) and run the command `npm run start-ssr`.

With RSC you can create custom attributes and pass in your own sizing functions in addition to the prebuilt configurations I have included. You can create your own custom props and reference DOM nodes or window objects so that your components may be aware of any DOM node information or window

## Installation

To add RSC to your project, run one of the following commands in your project root.

`npm install react-size-components --save`
`yarn add react-size-components`

Now you can use the package in your project.

```js
const withSize = require('react-size-components');
/// or
import withSize from 'react-size-components';
```

#### Note

If you are reading this on GitHub, trying browsing the [interactive demo](https://njmyers.netlify.com/?selectedKind=Size%20Components%2F1%29%20Module%20Infomation&selectedStory=welcome&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs) created using [storybook](https://storybook.js.org). I think you will find it much easier to understand what is happening!

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
  - [Usage](#usage)
- [Mobile Detection](#mobile-detection)
  - [Usage](#usage-1)
- [Basic Orientation Detection](#basic-orientation-detection)
  - [Usage](#usage-2)
- [InView Placement Aware Components](#inview-placement-aware-components)
  - [Usage](#usage-3)
  - [Using in a List of Position Aware Children](#using-in-a-list-of-position-aware-children)
- [Custom Configuration](#custom-configuration)
  - [Basic Usage](#basic-usage)
  - [Notes for Custom Functions](#notes-for-custom-functions)
  - [Advanced Usage](#advanced-usage)
- [Performance](#performance)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Component Sizing

Component sizing is probably the most frequent use of RSC. It is helpful anytime you need to know the height and/or width of a component. RSC takes care of ensuring your node is available at the right time, measuring the node, subscribing to future size changes and finally making that data available to you.

<!-- STORY -->

### Using as Child

Creating a size aware child component is the simplest usage of RSC. Call the onSize function by first passing in the configuration object and then the component you would like to have size data on. Use the prop `childRef` to specify which node you would like to measure. The sizes object will be added to props and made available in your component in `props.sizes.component`

```js
import React from 'react';
import withSize from 'react-size-components';

const Child = ({ sizes, childRef } = {}) => (
  <div ref={childRef}>
    <h2>Child Component</h2>
    <li>My height is: {sizes.component.height}</li>
    <li>My width is: {sizes.component.width}</li>
  </div>
);

export default withSize({ component: true })(Child);
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
      s,
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

### Usage

If you need a window aware component call the Size function with the configuration object `{ measureWindow: true }`. The window sizes will be added to props and be made available to your component in `props.sizes.window`

```js
import React from 'react';
import withSize from 'react-size-components';

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

export default withSize({ measureWindow: true })(Child);
```

## Mobile Detection

RSC also can make your components aware of mobile breakpoints. Helpful for rendering different views based on screen sizes.

<!-- STORY -->

### Usage

To use call the Size function with a configuration object containing the mobile boolean and an optional breakpoint.

`{ mobile: true, breakpoint: 1000 }`

Breakpoint will default to 768 if unspecified.

```js
import React from 'react';
import withSize from 'react-size-components';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <li>Am I mobile: {sizes.mobile.toString()}</li>
    </React.Fragment>
  );
};

export default withSize({ mobile: true, breakpoint: 1000 })(Child);
```

## Basic Orientation Detection

Screen size is not the only variable that can affect your view. Screen orientation has a large role in determining how your view should look and RSC also takes care of this.

<!-- STORY -->

### Usage

To use all you have to do is pass in the orientation boolean on the Size configuration object.

`{ orientation: true }`

```js
import React from 'react';
import withSize from 'react-size-components';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <li>My orientation is: {sizes.orientation}</li>
    </React.Fragment>
  );
};

export default withSize({ orientation: true })(Child);
```

## InView Placement Aware Components

<!-- STORY -->

### Usage

Now your components can not only be aware of their size but they can also be aware of their placement on the page. The component listens for scroll actions and updates the flag according to whether or not it is viewable in the current browser window.

To access simply add the inView flag to the configuration object and inView will be accessible in the sizes prop. Don't forget to add `childRef` as a ref to the DOMNode that you want to check!

`{ inView: true }`

```js
import React from 'react';
import withSize from 'react-size-components';

const Child = ({ sizes, childRef, id = 'undefined' } = {}) => {
  return (
    <article ref={childRef}>
      <h2>Child Component</h2>
      <li>My id is: {id}</li>
      <li>I am in view: {sizes.inView.toString()}</li>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus
        sapiente quasi, dolores porro libero dolore perspiciatis itaque! Esse
        tempora reiciendis, voluptates non perferendis ab quasi doloremque
        dolorum consectetur dolor.
      </p>
    </article>
  );
};

export default withSize({ inView: true })(Child);
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

## Custom Configuration

<!-- STORY -->

### Basic Usage

We can also create custom flags based on comparison functions. Pass in an array of comparisons and each one will be added to sizes props. Please see below code for documentation on using custom flags and functions.

```js
import React from 'react';
import withSize from 'react-size-components';

const Child = ({ sizes } = {}) => {
  return (
    <React.Fragment>
      <h2 className="h2-roboto">Child Component</h2>
      <li className="li-roboto-1">
        My custom flag isBiggerThan1000 is: {sizes.isBiggerThan1000.toString()}
      </li>
      <li className="li-roboto-1">
        My custom flag isBiggerThan1200 is: {sizes.isBiggerThan1200.toString()}
      </li>
    </React.Fragment>
  );
};

const isBiggerThan1000 = (sizes) => window.innerWidth > 1000;
const isBiggerThan1200 = (sizes) => window.innerWidth > 1200;

const custom = [
  {
    name: 'isBiggerThan1000',
    fn: isBiggerThan1000,
    subscriptions: {
      resize: true,
    },
  },
  {
    name: 'isBiggerThan1200',
    fn: isBiggerThan1200,
    subscriptions: {
      resize: true,
    },
  },
];

export default withSize({ custom })(Child);
```

### Notes for Custom Functions

Please be aware that you must manually turn on subscriptions. The currently availble options are `resize: true` and `scroll: true`

```js
const isBiggerThan1000 = (sizes) =>
  sizes.window ? sizes.window.innerWidth > 1000 : undefined;

const custom = [
  {
    name: 'isBiggerThan1000',
    fn: isBiggerThan1000,
  },
];

// uh oh no subscription! you might get your first value but nothing after that
export default withSize({ custom })(Child);
```

### Advanced Usage

I have also exposed functionality to create more advanced custom flags and objects. This extends the functionality of this component to the point that you could rewrite all of the components and inject them as custom configurations. All you have to do is write comparator functions and a schema for the data that you would like to introduce. The sky is the limit!

**You must write a schema! React needs a default object for it's inital state.**

When writing advanced configuration the DOM node itself is made available (safely) to the comparator function. That is why we must use a schema object so that our initial state looks like the state that is returned from the comparator.

```js
import React from 'react';
import withSize from 'react-size-components';

const Advanced = ({ sizes, childRef } = {}) => {
  return (
    <div ref={childRef}>
      <h2 className="h2-roboto">Advanced Child Component</h2>
      <li className="li-roboto-1">
        My position from the top is: {sizes.position.top}
      </li>
      <li className="li-roboto-1">
        My position from the bottom is: {sizes.position.bottom}
      </li>
    </div>
  );
};

const calculatePosition = (node) => {
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

export default withSize({ custom })(Advanced);
```

Now our component knows exactly where it is on the page!

## Performance

This document has yet to be written.

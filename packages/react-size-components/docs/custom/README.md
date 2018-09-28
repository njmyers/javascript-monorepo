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
      <h2 className="h2">Child Component</h2>
      <li className="li-1">
        My custom flag isBiggerThan1000 is: {sizes.isBiggerThan1000.toString()}
      </li>
      <li className="li-1">
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
      <h2 className="h2">Advanced Child Component</h2>
      <li className="li-1">
        My position from the top is: {sizes.position.top}
      </li>
      <li className="li-1">
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

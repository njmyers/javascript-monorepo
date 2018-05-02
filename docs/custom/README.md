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
            <li>My custom flag isBiggerThan1000 is: {sizes.isBiggerThan1000.toString()}</li>
            <li>My custom flag isBiggerThan1200 is: {sizes.isBiggerThan1200.toString()}</li>
        </React.Fragment>
    );
};

const isBiggerThan1000 = (sizes) => (sizes.window ? sizes.window.innerWidth > 1000 : undefined);
const isBiggerThan1200 = (sizes) => (sizes.window ? sizes.window.innerWidth > 1200 : undefined);

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
const isBiggerThan1000 = (sizes) => (sizes.window ? sizes.window.innerWidth > 1000 : undefined);

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

export default Size({ resizeWindow: true, scrollWindow: true, custom })(Advanced);
```

As you can see, we must make the resize and scroll window subscriptions available to be able to use them in our advanced functionality. The same would apply for any other existing size data we wanted to use.

Now our component knows exactly where it is on the page!

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

## Basic Mobile Detection

<!-- STORY -->

### Using as Child

To use all you have to do is pass in a flag and optional breakpoint to Size config.

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

Same as component and window sizing examples. Inject your ID's and debounce to process your data if need be but this is the window we are talking about here.

## Basic Orientation Detection

<!-- STORY -->

To use all you have to do is pass in the orientation flag on the configuration object.

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

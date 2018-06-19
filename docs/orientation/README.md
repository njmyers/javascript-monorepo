## Basic Orientation Detection

Screen size is not the only variable that can affect your view. Screen orientation has a large role in determining how your view should look and RSC also takes care of this.

<!-- STORY -->

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

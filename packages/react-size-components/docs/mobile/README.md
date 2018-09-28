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

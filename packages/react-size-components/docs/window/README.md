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

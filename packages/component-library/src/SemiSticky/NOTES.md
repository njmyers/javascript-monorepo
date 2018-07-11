# SemiSticky

SemiSticky is a position aware component that animates in and out on scroll positions. It is inspired by the CSS property `position: sticky` but allows for usage in a much wider variety of situations. SemiSticky uses the AnimationProps for determining it's style. Please see AnimationProps for more information about usage.

SemiSticky uses a single prop to determine the scroll position of it's on state. That prop is called `top` and it signifies the amount of pixels from the top of the page that the component should apply it's onState styles. Anything greater then top will apply the onState styles and anything less then top will apply the offState styles.

## Usage

A common usage pattern is for fixed position headers and footers that will show themselves based on a user's scroll position.

```js
import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <SemiSticky top={400}>
        <Header />
      </SemiSticky>
    );
  }
}
```

In the above example, the Header component will hide from view when the user scrolls down 400 pixels. Sounds simple enough but to implement yourself takes many lines of code! Feel free to add your own onState and offState styles and SemiSticky will automatically generate CSS transitions.

If you would like to shallowly merge styles, use the `style` prop. If you want to replace the default inline styles, use the `replaceStyle` prop. You can also apply `className` prop but keep in mind that all of the inline styles will take precedence.

<!-- STORY -->

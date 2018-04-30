# React Size Components

<!-- STORY -->

React Size Components (RSC) is a small and lightweight library for measuring and monitoring the size and position of your components in relation to the browser window. It is a versatile HOC that wraps your component and makes available only the size data that you request for your particular component.

Listening to browser events like resize and scroll can be intensive tasks, so RSC Uses the a subscribe/publish method of listening. This means there is only one event listener for all of your sized components.

Comparing measurements can also be very intensive tasks so RSC uses PureComponents and never mutates it's internal state. The props that gets passed down will come as quickly as possible so your component can provide a responsive user experience. We request animation frames so that components are aware of there size as they are being changed by the user. Of course you can always debounce later for even more performance!

RSC aims to supports SSR (Server Side Rendering). No references the window object are made until the `componentDidMount` lifecycle method. All listeners are lazily subscribed to when they become available. SSR is still an experimental feature so please let me know if you encounter issues.

#### Note

If you are reading this on GitHub, trying browsing the [interactive demo](https://njmyers.github.io/react-size-components) created using [storybook](https://storybook.js.org). I think you will find it much easier to understand what is happening!

# React Size Components

<!-- STORY -->

## About

React Size Components (RSC) is a small and lightweight react component for measuring and monitoring the size and position of your components in relation to the page. It is a versatile HOC that wraps your component and makes available only the size data that you request for your particular component, when you need it. Sizing data can be accessed by the component itself or passed back to parent components by use of a callback function.

Listening to browser events like resize and scroll can be intensive tasks, so RSC uses the a subscribe/publish method of listening. This means there is only one event listener for all of your sized components. You can subscribe to multiple window scroll events on one page and not destroy your performance!

Comparing measurements can also be very intensive tasks so RSC uses a cusom object comparison function that is optimized for speed. The props that gets passed down will come as quickly as possible so your component can provide a responsive user experience. The core of RSC uses request animation frames so that components are aware of their size as they are being changed by the user. Of course you can always debounce later for even more performance!

RSC supports SSR (Server Side Rendering). No references to the window object are made prior to the `componentDidMount` lifecycle method. All window listeners are lazily subscribed to when they become available. This means you can use RSC with your JAM stack as a drop-in replacement for many other popular React based sizing components that don't support SSR. For a demonstration of SSR capabilities clone this [repository](https://github.com/njmyers/react-size-components) and run the command `npm run start-ssr`.

With RSC you can create custom attributes and pass in your own sizing functions in addition to the prebuilt configurations I have included. You can create your own custom props and reference DOM nodes or window objects so that your components may be aware of any DOM node information or window

## Installation

To add RSC to your project, run one of the following commands in your project root.

`npm install react-size-components --save`
`yarn add react-size-components`

Now you can use the package in your project.

```js
const withSize = require('react-size-components');
/// or
import withSize from 'react-size-components';
```

#### Note

If you are reading this on GitHub, trying browsing the [interactive demo](https://component-library.netlify.com/?selectedKind=Size%20Components%2F1%29%20Module%20Infomation&selectedStory=welcome&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs) created using [storybook](https://storybook.js.org). I think you will find it much easier to understand what is happening!

## Table of Contents

<!-- START doctoc -->

<!-- END doctoc -->

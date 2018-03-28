# React Sizing Components

A very small and lightweight library for measuring your components. Uses the subscribe/publish method of notifying your component lifecycles. Only one listener for all of you components is great! They all get notified together and reduce usage.

`npm install --save react-size-components`

```js
import Size from 'react-size-components';

/* These are the default settings */
const config = {
    component: false,
    measureWindow: false,
    inView: false,
    mobile: false,
    breakpoint: 768,
    orientation: false,
    resizeWindow: false,
    scrollWindow: false,
};

Size(config)(Component);
```

## Component Size

`component: true` measures the clientRect of the wrapped component and adds it to clientRect on this.props.sizes.

`this.props.sizes.clientRect`

## Window Size

`measureWindow: true` measures the window inner and outer widths/heights and adds them to windowSizes on this.props.sizes

```js
this.props.sizes.windowSizes;
/*
{
    innerHeight: number
    innerWidth: number
    outerHeight: number
    outerWidth: number
}
*/
```

## inView

Tells whether or not the component is inView. Boolean flag added.

```js
this.props.sizes.inView;
// true/false
```

## mobile

Adds mobile flags for isMobile and orientation

## minMaxHeight

Measures

## Callback

If you would prefer to have the parent control the sizes you can pass a cb function to the wrapped component. It will update you when the size and state of your component changes. This is useful it you would prefer to keep a child stateless or if you want to pass some sizing information to a higher state like redux or a controlling parent component

```js
import Size from 'react-size-components';

const Child = (props) => {
    return <p>What size am I?</p>;
};

const Wrapped = Size({ inView: true })(Child);

class Parent extends Component {
    constructor(props) {
        super(props);
    }

    handleSize = (sizes) => {
        // control styles  or pass to higher state
        console.log(sizes);
    };

    render() {
        return <Wrapped onSize={this.handleSize} />;
    }
}
```

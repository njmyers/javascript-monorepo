# Component Library

This is a collection of useful and maybe useless React components. In general components will follow a few rules in order to increase usability. These rules in paricular are applied in how the components will use inline styles

## Global Usage notes

### Inline Styling

1.  All components accept className prop.
2.  For a shallow merge of styles, use the style prop on a component.
3.  To escape all inline styles, pass an empty object to replaceStyle prop.
4.  For a custom reusable component, redefine the defaultProps with a new replaceStyle object. Don't forget to merge all of the other defaultProps!

```js
<Component className="class" />
// behaves as expected - inline styles take precendence over rules applied to className
<Component style={{ color: 'red' }} />
// shallowly merges style with the default inline styles of the component
<Component replaceStyle={{}} />
// all inline styles are removed
```

### Animation Props


## Status Switch

Wrap your React Components in a StatusSwitch to conditionally render based on status props.

```js
import React from 'react';

class Stateful extends React.Component {
  state = {
    status: 'initial',
  };

  toLoading = () => this.setState({ status: 'loading' });

  toError = () => this.setState({ status: 'error' });

  render() {
    return (
      <StatusSwitch status={this.state.status}>
        <div>
          <p>Some content</p>
        </div>
      </StatusSwitch>
    );
  }
}
```

Also you can pass in your own components as render props `loading` or `error` so you can customize the error and loading renders

```js
class Stateful extends React.Component {
  render() {
    return (
      <StatusSwitch
        status={this.state.status}
        error={(props) => <p>error</p>}
        loading={(props) => <p>loading</p>}
      >
        <div>
          <p>Some content</p>
        </div>
      </StatusSwitch>
    );
  }
}
```

### Form Components

A selection of React form components. Meant to assist in adding labels and making accessibility automatic. Also helps in generating css classes and modifiers.

#### Input

```js
import React from 'react';

class Form extends Component {
  state = {
    age: 0
  }

  this.onChange(event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    <form>
      <Input
        value={this.state.value}
        onChange={this.onChange}
        className="formInput"
        name="age"
        label="Your Age"
      />
    </form>;
  }
}
```

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

## Props
| Prop Name | Type | Required | Default Value | Description |
|:----------|:-----|:---------|:--------------|:------------|
|`childRef`|`HTMLElement`|true|-|_reference from withSize for dom component position/sizing_|
|`children`|`ReactNode`|false|-|_react children (your component)_|
|`className`|`string`|false|-|_className applied to the container element_|
|`offState`|<code>{}</code>|false|<code>{<br>  transform: 'translateY(-100px)',<br>}</code>|_css inline styles applied to the off state_|
|`onState`|<code>{}</code>|false|<code>{<br>  transform: 'translateY(0)',<br>}</code>|_css inline styles applied to the on state_|
|`replaceStyle`|<code>{}</code>|false|<code>{<br>  position: 'fixed',<br>  background: 'rgba(0, 0, 0, 0.8)',<br>  width: '100%',<br>  top: 0,<br>  left: 0,<br>}</code>|_completely replace all styles_|
|`sizes`|<code>{<br>  isSemiStickyActive: boolean,<br>}</code>|true|-|_inherited sizing info_|
|`style`|<code>{}</code>|false|-|_shallowly merge styles_|
|`top`|`number`|false|<code>200</code>|_distance from the document top to engage the on state styles_|
|`transitionSpeed`|`number`|false|<code>0.25</code>|_the speed of the transition_|
|`transitionTiming`|<code>&#124; 'ease'<br>&#124; 'linear'<br>&#124; 'ease-in'<br>&#124; 'ease-out'<br>&#124; 'ease-in-out'<br>&#124; 'step-start'<br>&#124; 'step-end'</code>|false|<code>'ease'</code>|_the transition timing function_|
# LazyImage

A component for lazily loading images

## Usage

```js
<LazyImage src={src} placeholder={placeholder} />
```

<!-- STORY -->

## Props
| Prop Name | Type | Required | Default Value | Description |
|:----------|:-----|:---------|:--------------|:------------|
|`alt`|`string`|false|-|_pass-thru alt tag for image_|
|`baseStyles`|<code>{}</code>|false|<code>{<br>  margin: 0,<br>  padding: 0,<br>  width: '100%',<br>  height: 'auto',<br>  backfaceVisibility: 'inherit',<br>}</code>|_base styles applied to all elements_|
|`className`|`string`|true|-|_class name applied to the components in BEM style_|
|`containerStyle`|<code>{}</code>|false|<code>{<br>  position: 'relative',<br>  overflow: 'hidden',<br>  // fix for image element whitespace<br>  lineHeight: 0,<br>}</code>|_shallow merge of styles applied to the container_|
|`imageStyle`|<code>{}</code>|false|<code>{}</code>|_shallow merge of styles applied to the highres_|
|`name`|`string`|false|-|_name attribute for onclick events_|
|`onClick`|`Function`|false|-|_pass-thru onclick function_|
|`placeholder`|`string`|true|-|_placeholder image src_|
|`placeholderStyle`|<code>{}</code>|false|<code>{<br>  position: 'absolute',<br>  top: 0,<br>  left: 0,<br>  bottom: 0,<br>  right: 0,<br>  objectFit: 'contain',<br>  transition: '0.25s opacity',<br>}</code>|_shallow merge of styles applied to the placeholder_|
|`src`|`string`|true|-|_high-res image src_|
|`title`|`string`|false|-|_pass-thru title tag for image_|
### Modal

Modal creates ... a modal. It uses `ReactDOM.createPortal` so it renders your element outside of the HTML tree. However it is still controlled by whichever react parent component it is used in. By default Modal renders to the id 'modal-root'. Please be sure to add 'modal-root' to your HTML file or else nothing will be rendered by this component.

The default export from Modal is the styled modal. It contains background, transitions and all sorts of fun inline css. If you would like to use only the portal creation you can find it as a named export `UnstyledModal`.

```js
import { Modal, UnstyledModal } from 'njmyers-component-library';
```

#### Usage

Simply add your children and use the parent component to control the status as 'on' or 'off'.

```js
import React from 'react';
import { Modal } from 'njmyers-component-library';

class ModalParent extends React.Component {
  state = {
    status: 'on'
  }

  turnOffModal = () => {
    this.setState({
      status: 'off'
    })
  }

  componentDidMount() {
    setTimeout(this.turnOffModal, 4000)
  }

  render() {
    return (
      <Modal status={this.state.status} />
        <p>Annoying advertisement</p>
      </Modal>
    )
  }
}
```

In the above example, the 'annoying advertisement' will render itself in aside under the 'modal-root' id for 4 seconds and then will animate to its offState styles. When ModalParent unmounts the modal component will be removed from 'modal-root'.

<!-- STORY -->

## Props
| Prop Name | Type | Required | Default Value | Description |
|:----------|:-----|:---------|:--------------|:------------|
|`children`|`ReactNode`|false|-|_react children (your component)_|
|`className`|`string`|false|-|_className applied to the container element_|
|`modalRoot`|`string`|false|<code>'modal-root'</code>|_div id where to render the react portal_|
|`offState`|<code>{}</code>|false|<code>{<br>  opacity: 0,<br>}</code>|_css inline styles applied to the off state_|
|`onState`|<code>{}</code>|false|<code>{<br>  opacity: 1,<br>}</code>|_css inline styles applied to the on state_|
|`replaceStyle`|<code>{}</code>|false|<code>{<br>  background: 'rgba(255, 255, 255, 0.8)',<br>  position: 'fixed',<br>  width: '100%',<br>  height: '100%',<br>  top: 0,<br>  left: 0,<br>  bottom: 0,<br>  right: 0,<br>  display: 'flex',<br>  justifyContent: 'center',<br>  alignItems: 'center',<br>}</code>|_completely replace all styles_|
|`status`|<code>'on' &#124; 'off'</code>|false|<code>'off'</code>|_display status of the styled modal_|
|`style`|<code>{}</code>|false|<code>{}</code>|_shallowly merge styles_|
|`transitionSpeed`|`number`|false|<code>0.25</code>|_the speed of the transition_|
|`transitionTiming`|<code>&#124; 'ease'<br>&#124; 'linear'<br>&#124; 'ease-in'<br>&#124; 'ease-out'<br>&#124; 'ease-in-out'<br>&#124; 'step-start'<br>&#124; 'step-end'</code>|false|<code>'ease'</code>|_the transition timing function_|
|`zIndexOff`|`number`|false|<code>-20</code>|_z-index of the modal when off_|
|`zIndexOn`|`number`|false|<code>1</code>|_z-index of the modal when on_|
### BEM

#### Background (Frustration)

I've read many articles about using BEM syntax. As I understand it the main points are as follows.

1.  BEM syntax reduces css specificity (GOOD)
2.  BEM syntax can be implemented easily with preprocessors (GOOD)
3.  BEM syntax makes your HTML or Components look ugly (BAD!)

If you stick to BEM syntax then you end up with a React Component like this

```js
<p className="block-element block_element-modifier block_element-otherModifier">
  Text
</p>
```

And sass or scss that looks like this

```scss
.block
  &_element
    &-modifier
    &-otherModifier
```

The sass looks like great IMHO but the markup looks terrible. How you want to write your sass or scss is a topic for another conversation. All of the aforementioned articles then proceed to explain how they have made adjustments on the BEM syntax so that it is easier to read. Usually this means creating shorter classNames and using tricks.

TODO ADD EXAMPLE

```js
```

```scss
```

Now of course this is a good thing as we want our source code to be cleaner and easier to read. However it comes at the cost of possible reducing the specificity of your compilied css code. Why do we have to make a sacrifice?

#### Solution

Now we have a brand new component for writing BEM classNames to your components. We hopefully get the best of both worlds by being able to using the full power of BEM in terms of specificity while using a much cleaner syntax in React. Behold the power of `<BEM>`

```js
class Menu extends React.Component {
  static defaultProps = {
    menuItems: [
      {
        text: 'Link1',
        id: 1,
      },
      {
        text: 'Link2',
        id: 2,
      },
      {
        text: 'Link3',
        id: 3,
      },
    ],
  };

  state = {
    active: 1,
  };

  render() {
    return (
      <BEM block="menu">
        <nav>
          {this.props.menuItems.map((item) => (
            <div element="buttonContainer">
              <button
                element="button"
                modifiers={this.state.active === item.id ? 'active' : ''}
              >
                {item.text}
              </button>
            </div>
          ))}
        </nav>
      </BEM>
    );
  }
}
```

Now what will this render? Something like this of course depending on which data you pass in

```html
<nav class="menu">
  <div element="buttonContainer" class="menu_buttonContainer">
    <button element="button" modifiers="active" class="menu_button menu_button-active">Link1</button>
  </div
  ><div element="buttonContainer" class="menu_buttonContainer">
    <button element="button" modifiers="" class="menu_button">Link2</button>
  </div>
  <div element="buttonContainer" class="menu_buttonContainer">
    <button element="button" modifiers="" class="menu_button">Link3</button>
  </div>
</nav>
```

Great... not only do we have the wordy classes all properly applied we also have searchable property strings associated with each element. Yay success

How would it look manually applying classNames to this component?

```js
class Menu extends React.Component {
  // ... data here
  render() {
    return (
      <nav className="menu">
        {this.props.menuItems.map((item) => (
          <div className="menu_buttonContainer">
            <button
              className={`menu_button ${
                this.state.active === item.id ? 'menu_Button-active' : ''
              }`}
            >
              {item.text}
            </button>
          </div>
        ))}
      </nav>
    );
  }
}
```

Not too bad. But what if we want to apply modifiers then it gets messy really quickly

```js
class Menu extends React.Component {
  // ... data here
  render() {
    return (
      <nav className="menu menu-right">
        {this.props.menuItems.map((item) => (
          <div className="menu_buttonContainer menu_buttonContainer-square">
            <button
              className={`menu_button ${
                this.state.active === item.id ? 'menu_button-active' : ''
              } ${this.state.animate === item.id ? 'menu_button-animate' : ''}`}
            >
              {item.text}
            </button>
          </div>
        ))}
      </nav>
    );
  }
}
```

Ughhh gross. You might try to clean it up with a helper function.

```js
class Menu extends React.Component {
  getButtonClass = (id) => {
    return `menu_button ${
      this.state.active === id ? 'menu_button-active' : ''
    } ${this.state.animate === id ? 'menu_button-animate' : ''}`;
  };
  // ... data here
  render() {
    return (
      <nav className="menu menu-right">
        {this.props.menuItems.map((item) => (
          <div className="menu_buttonContainer menu_buttonContainer-square">
            <button className={this.getButtonClass(item.id)}>
              {item.text}
            </button>
          </div>
        ))}
      </nav>
    );
  }
}
```

Well why not just use `<BEM>` ?

```js
class Menu extends React.Component {
  // same data from before

  state = {
    active: 1,
    animate: 1,
  };

  getModifiers = (id) => {
    return Object.entries(this.state)
      .filter((entry) => entry[1] === id)
      .map((entry) => entry[0]);
  };

  render() {
    return (
      <BEM block="menu">
        <nav modifier="right">
          {this.props.menuItems.map((item) => (
            <div element="buttonContainer" modifiers="square">
              <button element="button" modifiers={this.getModifiers(item.id)}>
                {item.text}
              </button>
            </div>
          ))}
        </nav>
      </BEM>
    );
  }
}
```

And that will produce the following html

```html
<nav modifier="right" class="menu">
    <div element="buttonContainer" modifiers="square" class="menu_buttonContainer menu_buttonContainer-square">
        <button element="button" modifiers="active,animate" class="menu_button menu_button-active menu_button-animate">Link1</button>
    </div>
    <div element="buttonContainer" modifiers="square" class="menu_buttonContainer menu_buttonContainer-square">
        <button element="button" modifiers="" class="menu_button">Link2</button>
    </div>
    <div element="buttonContainer" modifiers="square" class="menu_buttonContainer menu_buttonContainer-square">
        <button element="button" modifiers="" class="menu_button">Link3</button>
    </div>
</nav>
```

And now you can write your sass the same way

```scss
.menu
  &_buttonContainer
    &-square
  &_button
    &-animate
    &-active
```

Anyways you may think differently but this syntax makes alot of sense for me!

#### Notes

BEM will only add classes to dom elements and not to Components. In the below example the p entities will receive classNames `"block_element"` and `"block_otherElement"` repectively. No classNames will be added to the `<SpecialComponent />`. This is a design feature not an error. We would assume that you will use another instance of BEM inside your special component as it is special enough to warrant it's own component! This frees you up for using the create rich environment of composing components together.

```js
render() {
  return (
    <BEM block="block">
      <p element="element">text</p>
      <p element="otherElement">text</p>
      <SpecialComponent />
    </BEM>
  )
}
```

All classNames are added to previously existing classNames. This means you can still use things like font awesome and existing classNames as BEM builds on top of already existing features. The i element below would have the className of `"fa block_element"`

```js
render() {
  return (
    <BEM block="block">
      <i className="fa" element="element">text</i>
    </BEM>
  )
}
```

## BEM

### Background (Frustration)

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

### Solution

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

### Notes

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

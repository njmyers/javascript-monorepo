# Form Components

A selection of React form components. Meant to assist in adding labels and making accessibility automatic. Also helps in generating css classes and modifiers.

## Input

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

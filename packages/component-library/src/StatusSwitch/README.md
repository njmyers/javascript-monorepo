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

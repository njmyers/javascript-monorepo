import * as React from 'react';
import { createProvider } from 'react-redux';
import createStore from './create-store';

const _createProvider = (storeKey) => {
  const ReduxProvider = createProvider(storeKey);
  const store = createStore();

  return class Provider extends React.Component {
    render() {
      return <ReduxProvider store={store}>{this.props.children}</ReduxProvider>;
    }
  };
};

export default _createProvider;

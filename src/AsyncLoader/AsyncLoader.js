import React, { Component } from 'react';
import Spinner from '../StatusSwitch/Spinner';

/**
 * Asynchronous loader for react components and webpack
 * @param {function} importComponent function that returns an import
 */
export default function asyncLoader(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      try {
        const { default: component } = await importComponent();
        this.setState({
          component: component,
        });
      } catch (e) {
        if (process.env.NODE_ENV === 'developement') console.log(e);
      }
    }

    render() {
      const Wrapped = this.state.component;

      return Wrapped ? <Wrapped {...this.props} /> : <Spinner />;
    }
  }

  return AsyncComponent;
}

// @flow
import * as React from 'react';

type Props = {
  loading: React.ComponentType<{}>,
  error: React.ComponentType<{}>,
};

type State = {
  status: string,
  component: React.ComponentType<{}>,
};

type Module = {
  default: React.ComponentType<{}>,
};

/**
 * Asynchronous loader for react components and webpack
 * @param {function} importComponent function that returns a module
 */
function loadComponent(importComponent: () => Promise<Module>, options: Props) {
  class AsyncComponent extends React.Component<Props, State> {
    static defaultProps = {
      error: () => 'error',
      loading: () => 'loading',
    };

    state = {
      status: 'loading',
      component: () => null,
    };

    async componentDidMount() {
      try {
        const { default: component } = await importComponent();

        this.setState({
          status: 'resolved',
          component,
        });
      } catch (e) {
        if (process.env.NODE_ENV === 'developement') console.error(e);
        this.setState({ status: 'error' });
      }
    }

    render() {
      const Wrapped: React.ComponentType<{}> = this.state.component;
      const ErrorComponent = this.props.error;
      const Loading = this.props.loading;

      switch (this.state.status) {
        case 'error':
          return <ErrorComponent />;
        default:
        case 'loading':
          return <Loading />;
        case 'resolved':
          return <Wrapped {...this.props} />;
      }
    }
  }

  // overwrite fallback components with options object
  AsyncComponent.defaultProps = {
    ...AsyncComponent.defaultProps,
    ...options,
  };

  return AsyncComponent;
}

export default loadComponent;

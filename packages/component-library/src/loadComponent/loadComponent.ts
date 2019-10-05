
import * as React from 'react';
import StatusSwitch from '../StatusSwitch';

type Props = {
  loading?: React.ComponentType<{}>,
  error?: React.ComponentType<{}>,
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
    static defaultProps = {};

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
      return (
        <StatusSwitch
          loading={this.props.loading}
          error={this.props.error}
          status={this.state.status}
        >
          <Wrapped {...this.props} />
        </StatusSwitch>
      );
    }
  }

  // overwrite fallback components with options object
  AsyncComponent.defaultProps = {
    ...options,
  };

  return AsyncComponent;
}

export default loadComponent;

// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import * as __ from 'smalldash';
import _ from 'lodash';

import LazyEvent from './LazyEvent';
import createInitalState from './initializers';

import type {
  Sizes,
  Configuration,
  Configurations,
} from './configurations/types';

type ComponentState = {
  subscriptions: Array<any>,
  DOMNode?: HTMLElement,
};

type State = Sizes & ComponentState;

type Props = {
  onSize?: (State) => any,
  id?: string,
};

/**
 * This function will create an HOC that will wrap the react component.
 * It will make available all current props and also the current DOMNode.
 * @param {object} subscriptions which window events to subscribe to
 * @param {string} name string indentifier to be added to sizes prop
 * @param {function} fn comparator function to return value of the prop
 * @param {object} schema initial object state for safe object access
 */
const createConfigurationInjector = (configurations) => (Wrapped) => {
  return class ConfigurationInjector extends React.Component<Props, State> {
    state = createInitalState(configurations);

    resize = (config: Configuration) => this.computeProperty.bind(this, config);
    scroll = (config: Configuration) =>
      _.throttle(this.computeProperty.bind(this, config), 400);

    computeProperties = () => {
      configurations.forEach((prop) => this.computeProperty(prop));
    };

    computeProperty = ({ name, fn, schema }: Configuration) => {
      this.setState((state) => {
        const nextProps = state.DOMNode ? fn(state.DOMNode) : schema;
        return !__.equals(nextProps, state[name])
          ? { [name]: nextProps }
          : null;
      });
    };

    scheduleSubscriptions = () => {
      configurations.forEach((config) => {
        Object.keys(config.subscriptions).forEach((listener) => {
          this.setState((state) => ({
            subscriptions: [
              ...state.subscriptions,
              LazyEvent(listener).subscribe(this[listener](config)),
            ],
          }));
        });
      });
    };

    /**
     * Sets reference to DOMNode and stores it in component state
     * Schedules listeners
     */
    componentDidMount() {
      // store DOM
      this.setState({ DOMNode: ReactDOM.findDOMNode(this) });
      // schedule listeners
      this.scheduleSubscriptions();
      // first call
      this.computeProperties();
    }

    /**
     * Unsubscribe from all window listener if it has been set up
     */
    componentWillUnmount() {
      this.state.subscriptions.forEach((each) => each.unsubscribe());
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
      if (prevState !== this.state && this.props.onSize) {
        this.props.onSize({
          ...this.state,
          name: Wrapped.name,
          id: this.props.id,
        });
      }
    }

    render() {
      return <Wrapped {...this.props} sizes={this.state} />;
    }
  };
};

export default createConfigurationInjector;

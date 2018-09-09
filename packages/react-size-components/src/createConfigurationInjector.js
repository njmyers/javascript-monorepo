// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import * as __ from 'smalldash';
import _ from 'lodash-es';

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
        const nextProps = this.state.DOMNode
          ? fn(this.state.DOMNode.current)
          : schema;
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

    safeInit = () => {
      if (this.state.DOMNode) {
        this.scheduleSubscriptions();
        // first call
        this.computeProperties();
      } else {
        const poll = _.debounce(this.safeInit.bind(this), 300);
        poll();
      }
    };

    componentDidMount() {
      this.setState({
        DOMNode: React.createRef(),
      });

      this.safeInit();
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
      return (
        <Wrapped
          childRef={this.state.DOMNode}
          sizes={this.state}
          {...this.props}
        />
      );
    }
  };
};

export default createConfigurationInjector;

import * as React from 'react';
import LazyEvent from '../LazyEvent';
import createInitalState from './initializers';

import { SIXTY_FPS } from '../constants';

import { Props, State } from './types';

/**
 * This function will create an HOC that will wrap the react component.
 * It will make available all current props and also the current DOMNode.
 * @param {object} subscriptions which window events to subscribe to
 * @param {string} name string indentifier to be added to sizes prop
 * @param {function} fn comparator function to return value of the prop
 * @param {object} schema initial object state for safe object access
 */
const createConfigurationInjector = configurations => Wrapped => {
  return class ConfigurationInjector extends React.PureComponent<Props, State> {
    state = {
      ...createInitalState(configurations),
      DOMNode: React.createRef(),
    };

    computeProperty = ({ name, fn }: Configuration) => () => {
      this.setState(state => {
        const nextProps = state.DOMNode.current // call on the found node
          ? fn(state.DOMNode.current, window) // otherwise call our function with the dummy node
          : // that way we start calling our functions early
            // we don't lose out on performance of window calls with this method
            fn(document.createElement('dummy'), window);

        return { [name]: nextProps };
      });
    };

    scheduleSubscriptions() {
      const subscriptions = [].concat(
        ...configurations.map(config =>
          Object.keys(config.subscriptions || {}).map((eventType: string) =>
            LazyEvent(eventType).subscribe(this.computeProperty(config))
          )
        )
      );

      this.setState(state => ({ subscriptions }));
    }

    computeProperties = () => {
      configurations.forEach(config => this.computeProperty(config)());
    };

    safeInit = () => {
      if (this.state.DOMNode) {
        // schedule subscriptions
        this.scheduleSubscriptions();
        // first call
        this.computeProperties();
      } else {
        // first call
        this.computeProperties();
        // continue until we have dom reference
        setTimeout(() => this.safeInit(), SIXTY_FPS);
      }
    };

    componentDidMount() {
      // safely get first value and schedule after DOMNode is available
      this.safeInit();
    }

    /**
     * Unsubscribe from all window listener if it has been set up
     */
    componentWillUnmount() {
      this.state.subscriptions.forEach(each => each.unsubscribe());
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
      if (
        prevState !== this.state &&
        this.props.onSize &&
        typeof this.props.onSize === 'function'
      ) {
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
          {...this.props}
          childRef={this.state.DOMNode}
          sizes={this.state}
        />
      );
    }
  };
};

export default createConfigurationInjector;

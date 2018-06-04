import React from 'react';
import ReactDOM from 'react-dom';
import * as __ from 'smalldash';
import _ from 'lodash';

import LazyEvent from './LazyEvent';
import createInitalState from './initializers';

/**
 * This function will create an HOC that will wrap the react component.
 * It will make available all current props and also the current DOMNode.
 * @param {object} subscriptions which window events to subscribe to
 * @param {string} name string indentifier to be added to sizes prop
 * @param {function} fn comparator function to return value of the prop
 * @param {object} schema initial object state for safe object access
 */
const createConfigurationInjector = (configurations) => (Wrapped) => {
    return class ConfigurationInjector extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = createInitalState(configurations);
            // TODO: Add your own throttle/debouncing here
            this.resize = this.computeProperties.bind(this);
            this.scroll = _.throttle(this.computeProperties.bind(this), 400);
        }

        computeProperties = () => {
            configurations.forEach(({ name, fn, schema }) => {
                this.setState((state) => {
                    const nextSizes = state.DOMNode ? fn(state, state.DOMNode) : schema;
                    return !__.equals(nextSizes, state[name]) ? { [name]: nextSizes } : null;
                });
            });
        };

        /**
         * Sets reference to DOMNode and stores it in component state
         * Schedules listeners
         */
        componentDidMount = () => {
            // store DOM
            this.setState({ DOMNode: ReactDOM.findDOMNode(this) });
            // schedule listeners
            Object.keys(this.state.subscriptions).forEach((listener) => {
                this.setState((state) => ({
                    subscriptions: {
                        ...state.subscriptions,
                        [listener]: LazyEvent(listener).subscribe(this[listener]),
                    },
                }));
            });
            // first call
            this.computeProperties();
        };

        /**
         * Unsubscribe from window listener if it has been set up
         */
        componentWillUnmount() {
            Object.keys(this.state.subscriptions).forEach((listener) =>
                this.state.subscriptions[listener].unsubscribe()
            );
        }

        componentDidUpdate() {
            if (this.props.onSize) {
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

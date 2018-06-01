import React from 'react';
import ReactDOM from 'react-dom';
import * as __ from 'smalldash';
import _ from 'lodash';

/**
 * This function will create an HOC that will wrap the react component.
 * It will make available all current props and also the current DOMNode.
 * @param {object} subscriptions which window events to subscribe to
 * @param {string} name string indentifier to be added to sizes prop
 * @param {function} fn comparator function to return value of the prop
 * @param {object} schema initial object state for safe object access
 */
const createAdvancedPropInjector = ({ subscriptions, name, fn, schema = '' } = {}) => (Wrapped) => {
    return class AdvancedProp extends React.PureComponent {
        constructor(props) {
            super(props);
            // TODO: add an option to input throttling/debouncing mechanism.
            this.scroll = _.throttle(this.computeProperties.bind(this), 400);
            this.resize = this.computeProperties.bind(this);
            // store subscriptions in state
            this.state = {
                DOMNode: undefined,
                scroll: undefined,
                resize: undefined,
                [name]: schema,
            };
        }

        /**
         * This function does...
         * 1. Computes properties according to the passed in function.
         * 2. Does a comparison of the property values not the object reference.
         * 3. Sets state and triggers an update if the values do not match
         * 4. Uses setState as a function of state so that we take advantage of the asynchronous
         *    and batched nature of setState.
         *
         * @param {object} nextProps this is props upon which to do comparisons. Defaults to this.props but can me manually defined for instance with nextProps in a lifecycle method.
         */
        computeProperties = (nextProps = this.props) => {
            this.setState((state) => {
                const nextSizes = state.DOMNode ? fn(nextProps.sizes, state.DOMNode) : schema;
                return !__.equals(nextSizes, nextProps.sizes[name]) ? { [name]: nextSizes } : null;
            });
        };

        /**
         * Sets reference to DOMNode and stores it in component state
         */
        componentDidMount = () => this.setState({ DOMNode: ReactDOM.findDOMNode(this) });

        storeSubscriptionToState = (props, which) => {
            if (props.sizes[which] && !this.state[which] && subscriptions[which])
                this.setState((state) => ({
                    [which]: props.sizes[which].subscribe(this[which]),
                }));
        };

        /**
         * Lazily set up subscriptions to window object
         * @param {*} nextProps nextProps to receive from parent components
         */
        componentWillReceiveProps(nextProps) {
            this.storeSubscriptionToState(nextProps, 'scroll');
            this.storeSubscriptionToState(nextProps, 'resize');
            this.computeProperties(nextProps);
        }

        /**
         * Unsubscribe from window listener if it has been set up
         */
        componentWillUnmount() {
            if (this.state.scroll) this.state.scroll.unsubscribe();
            if (this.state.resize) this.state.resize.unsubscribe();
        }

        render() {
            return (
                <Wrapped
                    {...this.props}
                    sizes={{ ...this.props.sizes, [name]: this.state[name] }}
                />
            );
        }
    };
};

export default createAdvancedPropInjector;

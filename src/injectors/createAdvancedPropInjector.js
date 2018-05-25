import React from 'react';
import ReactDOM from 'react-dom';
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
            this.onScroll = _.throttle(this.onScroll.bind(this), 400);

            // store subscriptions in state
            this.state = {
                scroll: undefined,
                resize: undefined,
            };
        }

        /**
         * Merge the old props with the return value of the comparator function
         * Make sure to check the existence of this.DOMNode ensures that we don't call anything before componentDidMount
         */
        mergeSizes = () =>
            this.DOMNode
                ? { ...this.props.sizes, [name]: fn(this.props.sizes, this.DOMNode) }
                : { ...this.props.sizes, [name]: schema };

        onScroll = () => this.forceUpdate();
        onResize = () => this.forceUpdate();

        componentDidMount() {
            this.DOMNode = ReactDOM.findDOMNode(this);
        }

        computeOnName = (name) => 'on' + name.slice(0, 1).toUpperCase() + name.slice(1);

        storeSubscriptionToState = (props, which) => {
            if (props.sizes[which] && !this.state[which] && subscriptions[which])
                this.setState((state) => ({
                    [which]: props.sizes[which].subscribe(this[this.computeOnName(which)]),
                }));
        };

        /**
         * Lazily set up subscriptions to window object
         * @param {*} nextProps nextProps to receive from parent components
         */
        componentWillReceiveProps(nextProps) {
            this.storeSubscriptionToState(nextProps, 'scroll');
            this.storeSubscriptionToState(nextProps, 'resize');
            // if (nextProps.sizes.scroll && !this.state.scroll && subscriptions.scroll)
            //     this.scroll = nextProps.sizes.scroll.subscribe(this.onScroll);

            // if (nextProps.sizes.resize && !this.resize && subscriptions.resize)
            //     this.resize = nextProps.sizes.resize.subscribe(this.onResize);
        }

        /**
         * Unsubscribe from window listener if it has been set up
         */
        componentWillUnmount() {
            if (this.state.scroll) this.state.scroll.unsubscribe();
            if (this.state.resize) this.state.resize.unsubscribe();
        }

        render() {
            return <Wrapped {...this.props} sizes={this.mergeSizes()} />;
        }
    };
};

export default createAdvancedPropInjector;

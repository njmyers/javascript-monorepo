import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';

/**
 * This function will create an HOC that will wrap the react component.
 * It will make available all current props and also the current DOMNode.
 * @param {object} subscriptions which window events to subscribe to
 * @param {string} name string indentifier to be added to sizes prop
 * @param {function} fn comparator function to return value of the prop
 * @param {object} schema initial object state for safe object access
 */
const createAdvancedPropInjector = ({ subscriptions, name, fn, schema = '' } = {}) => (Wrapped) => {
    return class AdvancedProp extends PureComponent {
        constructor(props) {
            super(props);
            this.onScroll = throttle(this.onScroll.bind(this), 400);
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

        /**
         * Lazily set up subscriptions to window object
         * @param {*} nextProps nextProps to receive from parent components
         */
        componentWillReceiveProps(nextProps) {
            if (nextProps.sizes.scroll && !this.scroll && subscriptions.scroll)
                this.scroll = nextProps.sizes.scroll.subscribe(this.onScroll);

            if (nextProps.sizes.resize && !this.resize && subscriptions.resize)
                this.resize = nextProps.sizes.resize.subscribe(this.onResize);
        }

        /**
         * Unsubscribe from window listener if it has been set up
         */
        componentWillUnmount() {
            if (this.scroll) this.scroll.unsubscribe();
            if (this.resize) this.resize.unsubscribe();
        }

        render() {
            return <Wrapped {...this.props} sizes={this.mergeSizes()} />;
        }
    };
};

export default createAdvancedPropInjector;

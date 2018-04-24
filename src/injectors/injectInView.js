import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';

function InView(Wrapped) {
    return class InViewAction extends Component {
        constructor(props) {
            super(props);
            this.onScroll = throttle(this.onScroll.bind(this), 500);
        }

        /* Check inView */
        isInView = () => {
            console.log('isinview called');
            const offsetTop = this.DOMNode ? this.DOMNode.offsetTop : 0;
            const clientTop = this.DOMNode ? this.DOMNode.getBoundingClientRect().top : 0;

            console.log(clientTop);

            const clientHeight = this.props.sizes ? this.props.sizes.component.height : 0;
            const innerHeight = this.props.sizes.windowSize
                ? this.props.sizes.windowSize.innerHeight
                : 0;

            return clientTop < 0 ? Math.abs(clientTop) - clientHeight < 0 : clientTop < innerHeight;
        };

        mergeSizes = () => ({ ...this.props.sizes, inView: this.isInView() });

        /**
         * on resize force an update.
         * do this instead of setting state because this component doesn't use the information
         */
        onScroll(sizes) {
            console.log('scrolling');
            this.forceUpdate();
        }

        /* Lifecycle */
        componentDidMount() {
            // make sure to set reference to this node before attempting to size
            this.DOMNode = ReactDOM.findDOMNode(this);
        }

        /**
         * Lazily set up subscriptions to window object
         * @param {*} nextProps next props to receive from parent components
         */
        componentWillReceiveProps(nextProps) {
            if (nextProps.sizes.scroll && !this.subscription)
                this.subscription = nextProps.sizes.scroll.subscribe(this.onScroll);
        }

        /**
         * Unsubscribe from window listener if it has been set up
         */
        componentWillUnmount() {
            if (this.subscription) this.subscription.unsubscribe();
        }

        render() {
            return <Wrapped {...this.props} sizes={this.mergeSizes()} />;
        }
    };
}

export default InView;

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
            const top = this.DOMNode ? this.DOMNode.getBoundingClientRect().top : 0;
            const height = this.props.sizes ? this.props.sizes.component.height : 0;

            const innerHeight = this.props.sizes.window ? this.props.sizes.window.innerHeight : 0;

            return top < 0 ? Math.abs(top) - height < 0 : top < innerHeight;
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
            // this.forceUpdate();
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

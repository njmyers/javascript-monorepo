import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const MeasureComponent = (Wrapped) => {
    return class ComponentSize extends PureComponent {
        getMeasurements = () => {
            const height = this.DOMNode ? this.DOMNode.clientHeight : 0;
            const width = this.DOMNode ? this.DOMNode.clientWidth : 0;
            return { height, width };
        };

        mergeSizes = () => ({ ...this.props.sizes, component: this.getMeasurements() });

        /**
         * on resize force an update.
         * do this instead of setting state because this component doesn't use the information
         */
        onResize = () => this.forceUpdate();

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
            if (nextProps.sizes.resize && !this.subscription)
                this.subscription = nextProps.sizes.resize.subscribe(this.onResize);
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
};

export default MeasureComponent;

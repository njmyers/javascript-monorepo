import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const MeasureComponent = (Wrapped) => {
    /**
     * This is a component Action description
     */
    return class ComponentSize extends PureComponent {
        getMeasurements = () => {
            const boundingRect = this.DOMNode ? this.DOMNode.getBoundingClientRect() : {};
            // transform to regular js object for comparisons by react downstream
            return { height: boundingRect.height, width: boundingRect.width };
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
            if (nextProps.sizes.resizeWindow && !this.subscription)
                this.subscription = nextProps.sizes.resizeWindow.subscribe(this.onResize);
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

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const injectWindowSize = (Wrapped) => {
    return class WindowSize extends PureComponent {
        /**
         * Get measurements from the window object
         * If this.DOMNode exists then we know the component has mounted
         * This is a safety check to prevent window calls when SSR
         */
        getMeasurements = () =>
            this.DOMNode
                ? {
                      innerHeight: window.innerHeight,
                      innerWidth: window.innerWidth,
                      outerHeight: window.outerHeight,
                      outerWidth: window.outerWidth,
                  }
                : {};

        /**
         * merge the size object with the new sizes
         */
        mergeSizes = () => ({ ...this.props.sizes, window: this.getMeasurements() });

        /**
         * on resize force an update.
         * do this instead of setting state because this component doesn't use the information
         */
        onResize = () => this.forceUpdate();

        /**
         * Set a reference to the DOMNode
         */
        componentDidMount() {
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
         * check window listener and unsubscribe if it has been set up
         */
        componentWillUnmount() {
            if (this.subscription) this.subscription.unsubscribe();
        }

        /**
         * Render the component with the new sizes object
         */
        render() {
            return <Wrapped {...this.props} sizes={this.mergeSizes()} />;
        }
    };
};

export default injectWindowSize;

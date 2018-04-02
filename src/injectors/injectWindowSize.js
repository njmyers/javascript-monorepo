import * as React from 'react';
import ReactDOM from 'react-dom';

const injectWindowSize = (Wrapped) => {
    return class WindowSize extends React.PureComponent {
        /**
         * Get measurements from the window object
         */
        getMeasurements = () => ({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth,
        });

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
         * Unsubscribe from window listener if it has been set up
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

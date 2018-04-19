import React, { PureComponent } from 'react';

/**
 * This is the callback injection function. It uses react to make comparisons
 * @param {Component} Wrapped the component to wrap
 */
const CallBack = (Wrapped) => {
    return class CallBackInjector extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                name: Wrapped.name,
                id: this.props.id,
            };
        }

        /* inject id and name for reference by parent function */
        mergeStateAndNextProps = (props) => ({ ...props.sizes, ...this.state });

        /* debounce callback for component updates */
        hotUpdate = (props) => {
            this.props.onSize(this.mergeStateAndNextProps(props));
        };

        componentDidMount() {
            if (this.props.onSize) this.hotUpdate(this.props);
        }

        componentWillReceiveProps(nextProps) {
            console.log('injector receiving props');
            if (this.props.onSize && this.props !== nextProps) this.hotUpdate(nextProps);
        }

        render() {
            return <Wrapped {...this.props} />;
        }
    };
};

export default CallBack;

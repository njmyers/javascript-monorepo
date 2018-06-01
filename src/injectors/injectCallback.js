import React from 'react';

/**
 * This is the callback injection function. It uses react and shallow object comparisons meaning if it is receiving props then it already has new data.
 * @param {Component} Wrapped the component to wrap
 */
const CallBack = (Wrapped) => {
    return class CallBackInjector extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                name: Wrapped.name,
                id: this.props.id,
            };
        }

        /* inject id and name for reference by parent function */
        hotUpdate = (props) => {
            this.props.onSize({ ...props.sizes, ...this.state });
        };

        componentDidMount() {
            if (this.props.onSize) this.hotUpdate(this.props);
        }

        componentWillReceiveProps(nextProps) {
            if (this.props.onSize && this.props.sizes !== nextProps.sizes)
                this.hotUpdate(nextProps);
        }

        render() {
            return <Wrapped {...this.props} />;
        }
    };
};

export default CallBack;

import React, { PureComponent } from 'react';

const SubPub = () => {
    const subscribers = {};

    const createKey = () => {
        return Math.random()
            .toString(16)
            .slice(-8);
    };

    return Object.seal({
        subscribe: (subscriber) => {
            const key = createKey();
            subscribers[key] = subscriber;
            return { unsubscribe: () => delete subscribers[key] };
        },

        publish: () => {
            Object.keys(subscribers).map((key) => subscribers[key]());
        },
    });
};

const createListener = (eventType) => {
    const listener = new SubPub();
    let working = false;

    window.addEventListener(eventType, (e) => {
        if (!working) {
            working = true;
            window.requestAnimationFrame(listener.publish);
            working = false;
            // setTimeout(() => (working = false), 66);
        }
    });

    return Object.seal({ subscribe: listener.subscribe });
};

/**
 * This function will inject one of our listeners (usually resize or scroll) in the sizes prop.
 * This will give the user access to subscribe to a window event.
 * @param {string} listener which listeners to inject into our sizes prop
 * @param {Component} Wrapped the component we are injecting into
 * @return {class} the wrapped component
 */
const createSubscriptionInjector = (listener) => (Wrapped) => {
    return class SubscribeListener extends PureComponent {
        constructor(props) {
            super(props);
        }

        /**
         * The injection will only happen after the component has mounted
         * this will prevent any calls to a global window object before it is present.
         * Therefore we must load the listener subscriptions asynchronously to support SSR
         */
        componentDidMount() {
            this[listener] = createListener(listener);
            this.forceUpdate();
        }

        mergeStateAndProps = () => ({ ...this.props.sizes, [listener]: this[listener] });

        render() {
            return <Wrapped {...this.props} sizes={this.mergeStateAndProps()} />;
        }
    };
};

export default createSubscriptionInjector;

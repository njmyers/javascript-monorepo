import React, { PureComponent } from 'react';

/**
 * Basic subscription publish function. Returns an object with subscribe and publish functions.
 */
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

/**
 * Creates a window event listener based on the event type. Uses animation frames for improved performance.
 * @param {string} eventType
 */
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
 * We create window listeners lazily using this function.
 * This allows us to refrain from using the window object until componentDidMount lifecycle method.
 * Partially application to the listeners reference object so we don't create more then one of the same type of listener.
 * @param {object} listeners cache storage for already created window listeners
 * @param {string} eventType which window event to create a listener for
 */
const windowEventCache = (listeners = {}) => (eventType) => {
    if (!listeners[eventType]) listeners[eventType] = createListener(eventType);
    return listeners;
};

const lazilyCreateListeners = windowEventCache();

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
        lazilyLoadListeners() {
            const listeners = lazilyCreateListeners(listener);
            this[listener] = listeners[listener];
            this.forceUpdate();
        }

        componentDidMount() {
            this.lazilyLoadListeners();
        }

        mergeStateAndProps = () => ({ ...this.props.sizes, [listener]: this[listener] });

        render() {
            return <Wrapped {...this.props} sizes={this.mergeStateAndProps()} />;
        }
    };
};

export default createSubscriptionInjector;

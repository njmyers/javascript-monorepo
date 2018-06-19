// @flow

type SubscriptionPublisher = {
    subscribe: () => { unsubscribe: () => boolean },
    publish: () => void,
};

/**
 * Basic subscription publish function. Returns an object with subscribe and publish functions.
 */
export const SubPub = (): SubscriptionPublisher => {
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
export const createListener = (eventType) => {
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
 * Partial application to the listeners reference object so we don't create more then one of the same type of listener.
 * @param {object} listeners cache storage for already created window listeners
 * @param {string} eventType which window event to create a listener for
 */
export const windowEventCache = (listeners = {}) => (eventType) => {
    if (!listeners[eventType]) listeners[eventType] = createListener(eventType);
    return listeners[eventType];
};

export default windowEventCache();

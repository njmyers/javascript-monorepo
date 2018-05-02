import React from 'react';
import * as __ from 'smalldash';

import {
    injectCallback,
    injectWindowSize,
    injectComponentSize,
    injectInView,
    injectMobile,
    injectOrientation,
    injectScrollSubscription,
    injectResizeSubscription,
    createBasicPropInjector,
    createAdvancedPropInjector,
} from './injectors';

/**
 * Returns a new array (HOC injector functions) with the partially applied option added based on the boolean.
 * @param {function} option the react higher order component to wrap
 * @param {boolean} bool whether or not you wish to add the option to the array
 * @param {array} arr the array of higher order components you wish to wrap with
 */
const addOption = (option) => (bool) => (arr) => (bool ? [...arr, option] : arr);

/**
 * Validates an array of custom injector objects. The objects must contain name (string) and fn (function) properties.
 * @param {array} arr an array of custom injector objects
 */
const createCustomInjectors = (arr) =>
    arr
        .map((injector) => {
            return typeof injector.name === 'string' && typeof injector.fn === 'function'
                ? typeof injector.subscriptions === 'object' || typeof injector.schema === 'object'
                    ? createAdvancedPropInjector(injector)
                    : createBasicPropInjector(injector)
                : undefined;
        })
        .filter((each) => each !== undefined);

/**
 * Adds HOC to the wrapped depending on the configuration object. Some HOC have dependencies on other HOC so this satisfies that logic as well.
 * @param {object} options this is the configuration object. It specifies which measurements to take.
 * @param {component} WrappedComponent the react component to wrap.
 */
const Compose = ({
    component = false,
    measureWindow = false,
    inView = false,
    mobile = false,
    orientation = false,
    breakpoint = 768,
    resizeWindow = false,
    scrollWindow = false,
    custom = [],
} = {}) => {
    return (WrappedComponent) => {
        // add measureWindow for props that depend on it
        measureWindow = inView || mobile || orientation ? true : measureWindow;
        // add component sizing for props that depend on it
        component = inView ? true : component;
        // add window resize listener for props that depend on it
        resizeWindow = measureWindow || component ? true : resizeWindow;
        // add window scroll listener for props that depend on it
        scrollWindow = inView ? true : scrollWindow;
        // create array of wrappers
        // ORDER IS SUPER IMPORTANT!!!
        const Wrappers = __.compose(
            addOption(injectInView)(inView),
            addOption(injectComponentSize)(component),
            addOption(injectOrientation)(orientation),
            addOption(injectMobile(breakpoint))(mobile),
            addOption(injectWindowSize)(measureWindow),
            addOption(injectResizeSubscription)(resizeWindow),
            addOption(injectScrollSubscription)(scrollWindow)
        )([]);

        // Compose our Wrappers(React HOC) so we wrap.
        // AGAIN ORDER IS SUPER IMPORTANT!!!
        return __.compose(...Wrappers, ...createCustomInjectors(custom), injectCallback)(
            WrappedComponent
        );
    };
};

export default Compose;

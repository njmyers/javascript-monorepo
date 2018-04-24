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
} from './injectors';

const addOption = (option) => (bool) => (arr) => (bool ? [...arr, option] : arr);

const createCustomInjectors = (arr) =>
    arr
        .map((injector) => {
            return typeof injector.name === 'string' && typeof injector.fn === 'function'
                ? createBasicPropInjector(injector.name)(injector.fn)
                : undefined;
        })
        .filter((each) => each !== undefined);

/**
 *
 * @param {object} options this is the configuration object. It specifies which measurements to take.
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
        // same with component boolean
        component = inView ? true : component;
        // same
        resizeWindow = measureWindow || component ? true : resizeWindow;

        scrollWindow = inView ? true : scrollWindow;

        const Wrappers = __.compose(
            addOption(injectInView)(inView),
            addOption(injectComponentSize)(component),
            addOption(injectOrientation)(orientation),
            addOption(injectMobile(breakpoint))(mobile),
            addOption(injectWindowSize)(measureWindow),
            addOption(injectResizeSubscription)(resizeWindow),
            addOption(injectScrollSubscription)(scrollWindow)
        )([]);

        return __.compose(...Wrappers, ...createCustomInjectors(custom), injectCallback)(
            WrappedComponent
        );
    };
};

export default Compose;

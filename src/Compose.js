import React from 'react';
import * as __ from 'smalldash';

import {
    componentConfig,
    inViewConfig,
    mobileConfig,
    orientationConfig,
    windowSizeConfig,
} from './configurations';

import createConfigurationInjector from './createConfigurationInjector';

/**
 * Returns a new array (HOC injector functions) with the partially applied option added based on the boolean.
 * @param {function} option the react higher order component to wrap
 * @param {boolean} bool whether or not you wish to add the option to the array
 * @param {array} arr the array of higher order components you wish to wrap with
 */
const addOption = (option) => (bool) => (arr) => (bool ? [...arr, option] : arr);

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
    resize = false,
    scroll = false,
    custom = [],
} = {}) => (WrappedComponent) => {
    // TODO: simplify this logic... everything should be advanced injectors with flags
    // add measureWindow for props that depend on it
    measureWindow = inView || mobile || orientation ? true : measureWindow;
    // add component sizing for props that depend on it
    component = inView ? true : component;
    // create array of wrappers
    // ORDER IS SUPER IMPORTANT!!!
    const configurations = __.compose(
        addOption(inViewConfig)(inView),
        addOption(componentConfig)(component),
        addOption(orientationConfig)(orientation),
        addOption(mobileConfig(breakpoint))(mobile),
        addOption(windowSizeConfig)(measureWindow)
    )([]);

    return createConfigurationInjector([...configurations, ...custom])(WrappedComponent);
};

export default Compose;

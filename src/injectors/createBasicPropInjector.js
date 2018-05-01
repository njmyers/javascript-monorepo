import * as React from 'react';

/**
 * Use this function to inject a basic property into sizes based on a comparison function
 * All data pre-existing in sizes will be available to the comparison function provided that
 *  1. You enable it with boolean logic in Compose (prebuilt props)
 *  2. You enable them in the config object (custom runtime props)
 * @param {string} propName name of property to inject
 * @param {function} fn a function to do a comparison on values of sizes
 * @return {function} a wrapped react component
 */
const createBasicPropInjector = (name) => (fn) => (Wrapped) => {
    return (props) => {
        return <Wrapped {...props} sizes={{ ...props.sizes, [name]: fn(props.sizes) }} />;
    };
};

export default createBasicPropInjector;

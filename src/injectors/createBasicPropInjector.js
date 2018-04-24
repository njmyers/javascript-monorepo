import * as React from 'react';

/**
 * Use this function to inject a basic property into sizes based on a comparison function
 * All data pre-existing in sizes will be available to the comparison function provided that
 * you inject it in the correct order in the Compose function.
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

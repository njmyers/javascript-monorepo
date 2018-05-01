import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createBasicPropInjector from './createBasicPropInjector';

/**
 * Comparison function to check if the device is in landscape or portrait mode.
 * @param {object} sizes this is the sizes prop containing all of the relevant sizes for determining orientation
 */
const getOrientation = (sizes) => {
    return sizes.window
        ? sizes.window.innerWidth > sizes.window.innerHeight ? 'landscape' : 'portrait'
        : undefined;
};

export default createBasicPropInjector('orientation')(getOrientation);

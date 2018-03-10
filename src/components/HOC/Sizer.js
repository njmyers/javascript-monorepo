import React from 'react';
import CBInjector from './CBInjector';
import Window from './Window';
import Sizes from './Sizes';

const pipe = (fn, ...fns) => (...args) => (!fns.length ? fn(...args) : pipe(...fns)(fn(...args)));
const compose = (...fns) => (...args) => pipe(...fns.reverse())(...args);

const addOptions = (option) => (bool) => (arr) => (bool ? [option, ...arr] : arr);

const addCB = addOptions(CBInjector);
const addWindow = addOptions(Window);
const addSizes = addOptions(Sizes);

const Sizer = (WrappedComponent) => ({ sizeWindow = true, sizeComponent = true, cb } = {}) => {
	const Wrappers = compose(addCB(), addWindow(sizeWindow), addSizes(sizeComponent))([]);
	return compose(...Wrappers)(WrappedComponent);
};

export default Sizer;

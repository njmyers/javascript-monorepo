import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createBasicPropInjector from './createBasicPropInjector';

const getOrientation = (sizes) => {
	return sizes.window
		? sizes.window.innerWidth > sizes.window.innerHeight ? 'landscape' : 'portrait'
		: undefined;
};

export default createBasicPropInjector('orientation')(getOrientation);

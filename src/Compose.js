import React from 'react';
import { compose } from 'smalldash/build/functional';

import CallBack from './CallBack';
import MeasureWindow from './MeasureWindow';
import MeasureComponent from './MeasureComponent';
import InView from './InView';
import Mobile from './Mobile';
import MinMaxHeight from './MinMaxHeight';

const addOptions = (option) => (bool) => (arr) => (bool ? [...arr, option] : arr);

const addWindow = addOptions(MeasureWindow);
const addComponent = addOptions(MeasureComponent);
const addInView = addOptions(InView);
const addMobile = addOptions(Mobile);
const addMinMaxHeight = addOptions(MinMaxHeight);

export default ({
	measureComponent = true,
	measureWindow = false,
	inView = false,
	mobile = false,
	minMaxHeight = false,
} = {}) => {
	return (WrappedComponent) => {
		// inView requires measurements
		measureWindow = inView || mobile ? true : measureWindow;
		measureComponent = inView || minMaxHeight ? true : measureComponent;

		const Wrappers = compose(
			addMinMaxHeight(minMaxHeight),
			addInView(inView),
			addComponent(measureComponent),
			addMobile(mobile),
			addWindow(measureWindow)
		)([]);

		return compose(...Wrappers, CallBack)(WrappedComponent);
	};
};

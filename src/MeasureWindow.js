import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash/debounce';
import * as __ from 'smalldash';
import { resizeWindow } from './listen';

const MeasureWindow = (Wrapped) => {
	return class WindowAction extends Component {
		constructor(props) {
			super(props);
			this.state = {
				windowSize: {
					innerHeight: window.innerHeight,
					innerWidth: window.innerWidth,
					outerHeight: window.outerHeight,
					outerWidth: window.outerWidth,
				},
			};

			this.polled = 0;
			this.refresh = debounce(this.refresh.bind(this), 300);
		}

		/* Measurments */

		getMeasurements = () => ({
			windowSize: {
				innerHeight: window.innerHeight,
				innerWidth: window.innerWidth,
				outerHeight: window.outerHeight,
				outerWidth: window.outerWidth,
			},
		});

		/* Listeners */
		handleResize = () => {
			const measurements = this.compareMeasurements();
			measurements ? this.setState(measurements) : null;
		};

		compareMeasurements() {
			const measurements = this.getMeasurements();
			return !__.equals(this.state, measurements) ? measurements : false;
		}

		refresh() {
			const measurements = this.compareMeasurements();

			if (measurements) {
				this.setState(measurements);
				this.refresh();
			} else {
				// poll twice after measurements are the same
				// in order to ensure any late loading elements
				this.polled += 1;
				if (this.polled < 2) this.refresh();
				else this.polled = 0;
			}
		}

		/* Lifecycle */
		componentDidMount() {
			// make sure to set reference to this node before attempting to size
			this.DOMNode = ReactDOM.findDOMNode(this);
			this.refresh();

			this.resizeWindowSubscription = resizeWindow.subscribe(() => this.handleResize());
		}

		componentWillUnmount() {
			this.resizeWindowSubscription.unsubscribe();
		}

		mergeStateAndProps = () => ({ ...this.props.sizes, ...this.state });

		render() {
			return <Wrapped {...this.props} sizes={this.mergeStateAndProps()} />;
		}
	};
};

export default MeasureWindow;

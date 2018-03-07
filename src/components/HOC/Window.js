import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';
import isEqualWith from 'lodash.isequalwith';
import isEqual from 'lodash.isequal';
import { resizeWindow } from '../../utils/listen';

function Window(WrappedComponent) {
	return class WindowAction extends Component {
		constructor(props) {
			super(props);
			this.name = WrappedComponent.name;
			this.state = {
				window: {
					innerHeight: window.innerHeight,
					innerWidth: window.innerWidth,
					outerHeight: window.outerHeight,
					outerWidth: window.outerWidth,
				},
				name: this.name,
				page: this.props.page,
			};

			this.polled = 0;
			this.refresh = debounce(this.refresh.bind(this), 300);
		}

		/* Measurments */

		getMeasurements = () => ({
			window: {
				innerHeight: window.innerHeight,
				innerWidth: window.innerWidth,
				outerHeight: window.outerHeight,
				outerWidth: window.outerWidth,
			},
		});

		/* call this instead of setState so that you always hook into the cb */
		hotUpdate = (object) => {
			if (typeof object === 'object') {
				this.setState(object);
			} else
				process.env.NODE_ENV === 'development'
					? console.log(
							'you tried to update state without an object, please pass an object'
					  )
					: null;
		};

		/* Listeners */
		handleResize = () => {
			const measurements = this.compareMeasurements();
			measurements ? this.hotUpdate(measurements) : null;
		};

		compareMeasurements() {
			const measurements = this.getMeasurements();
			const thisMeasurements = {
				window: this.state.window,
			};

			return !isEqual(measurements, thisMeasurements) ? measurements : false;
		}

		refresh() {
			const measurements = this.compareMeasurements();

			if (measurements) {
				this.hotUpdate(measurements);
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

		render() {
			const mergeSizes = { ...this.props.sizes, ...this.state };
			return <WrappedComponent {...this.props} sizes={mergeSizes} />;
		}
	};
}

export default Window;

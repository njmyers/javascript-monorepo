import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash/debounce';
import isEqualWith from 'lodash/isEqualWith';
import isEqual from 'lodash/isEqual';
import listen from './utils/listen';

function InView(WrappedComponent) {
	return class SizeAction extends Component {
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
				bool: undefined,
				clientRect: undefined,
				page: this.props.page,
			};

			this.polled = 0;
			this.refresh = debounce(this.refresh.bind(this), 300);
		}

		/* Measurments */
		isInView() {
			const clientRect = this.DOMNode ? this.DOMNode.getBoundingClientRect() : undefined;
			const offsetTop = this.DOMNode ? this.DOMNode.offsetTop : undefined;

			return clientRect
				? clientRect.top < 0
					? Math.abs(clientRect.top) - clientRect.height < 0
					: clientRect.top < this.state.window.innerHeight
				: undefined;
		}

		getMeasurements() {
			const boundingRect = this.DOMNode ? this.DOMNode.getBoundingClientRect() : undefined;

			// transform to regular js object for comparisons and iterations
			const clientRect = boundingRect
				? {
						bottom: boundingRect.bottom,
						top: boundingRect.top,
						left: boundingRect.left,
						right: boundingRect.right,
						height: boundingRect.height,
						width: boundingRect.width,
						x: boundingRect.x,
						y: boundingRect.y,
					}
				: undefined;

			return {
				window: {
					innerHeight: window.innerHeight,
					innerWidth: window.innerWidth,
					outerHeight: window.outerHeight,
					outerWidth: window.outerWidth,
				},
				clientRect,
			};
		}

		getSizes() {
			return {
				...this.getMeasurements(),
				bool: this.isInView(),
			};
		}

		/* call this instead of setState so that you always hook into the cb */
		hotUpdate = (object) => {
			if (typeof object === 'object') {
				this.setState(object, () => (this.props.cb ? this.props.cb(this.state) : null));
			} else
				process.env.NODE_ENV === 'development'
					? console.log(
							'you tried to update state without an object, please pass an object'
						)
					: null;
		};

		/* Listeners */
		handleScroll = () => {
			const bool = this.isInView();
			bool !== this.state.bool ? this.hotUpdate({ bool }) : null;
		};

		handleResize = () => {
			const sizes = this.compareAll();
			sizes ? this.hotUpdate(sizes) : null;
		};

		compareMeasurements() {
			const measurements = this.getMeasurements();
			const thisMeasurements = {
				window: this.state.window,
				clientRect: this.state.clientRect,
			};

			return !isEqual(measurements, thisMeasurements) ? measurements : false;
		}

		compareAll() {
			const sizes = this.getSizes();
			const thisSizes = {
				window: this.state.window,
				clientRect: this.state.clientRect,
				bool: this.state.bool,
			};

			return !isEqual(sizes, thisSizes) ? sizes : false;
		}

		refresh() {
			// only compare measurements for refreshing
			// otherwise scrolling could keep this polling forever
			const measurements = this.compareMeasurements();

			if (measurements) {
				// but if you need to refresh, refresh all
				const sizes = this.getSizes();
				this.hotUpdate(sizes);
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

			this.scrollSubKey = listen.scrollEvent.subscribe(this.handleScroll);
			this.resizeSubKey = listen.resizeEvent.subscribe(this.handleResize);
		}

		componentWillUnmount() {
			listen.scrollEvent.unsubscribe(this.scrollSubKey);
			listen.resizeEvent.unsubscribe(this.resizeSubKey);
		}

		render() {
			return <WrappedComponent {...this.props} inView={this.state} />;
		}
	};
}

export default InView;

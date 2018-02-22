import React, { Component } from 'react';
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

			this.handleScroll = this.handleScroll.bind(this);
			this.handleResize = this.handleResize.bind(this);
			this.refresh = debounce(this.refresh.bind(this), 500);
		}

		handleScroll() {
			const bool = this.isInView();

			if (bool !== this.state.bool) {
				// cb with new view status to parent
				if (this.props.cb) this.props.cb({ ...this.state, bool });
				// set internal component state
				this.setState({ bool });
			}
		}

		isInView() {
			const clientRect = this.divContainer
				? this.divContainer.getBoundingClientRect()
				: undefined;

			const offsetTop = this.divContainer ? this.divContainer.offsetTop : undefined;

			return clientRect
				? clientRect.top < 0
					? Math.abs(clientRect.top) - clientRect.height < 0
					: clientRect.top < this.state.window.innerHeight
				: undefined;
		}

		getMeasurements() {
			const boundingRect = this.divContainer
				? this.divContainer.getBoundingClientRect()
				: undefined;

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

		handleResize() {
			const sizes = this.getMeasurements();
			this.setState({ sizes });
		}

		refresh() {
			// only compare measurements for refreshing
			const measurements = this.getMeasurements();
			const thisMeasurements = {
				window: this.state.window,
				clientRect: this.state.clientRect,
			};

			const equal = isEqual(measurements, thisMeasurements);

			if (!equal) {
				const state = { ...this.state, ...this.getSizes() };
				this.setState(state);
				this.props.cb ? this.props.cb(state) : null;
				this.refresh();
			}
		}

		componentDidMount() {
			// set initial inview
			this.refresh();
			this.scrollSubKey = listen.scrollEvent.subscribe(this.handleScroll);
			this.resizeSubKey = listen.resizeEvent.subscribe(this.handleResize);
		}

		componentWillUnmount() {
			listen.scrollEvent.unsubscribe(this.scrollSubKey);
			listen.resizeEvent.unsubscribe(this.resizeSubKey);
		}

		render() {
			return (
				<div ref={(div) => (this.divContainer = div)}>
					{!this.props.cb ? (
						<WrappedComponent {...this.props} inView={this.state} />
					) : (
						<WrappedComponent {...this.props} />
					)}
				</div>
			);
		}
	};
}

export default InView;

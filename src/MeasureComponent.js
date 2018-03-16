import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import __ from 'smalldash';

import { resizeWindow, scrollWindow } from './listen';

const MeasureComponent = (Wrapped) => {
	return class ComponentAction extends Component {
		constructor(props) {
			super(props);
			this.state = {
				clientRect: {},
			};

			this.polled = 0;
			this.refresh = __.debounce(this.refresh.bind(this), 300);
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

			return { clientRect };
		}

		/* Listeners */
		handleChange = () => {
			const measurements = this.compareMeasurements();
			measurements ? this.setState(measurements) : null;
		};

		compareMeasurements() {
			const measurements = this.getMeasurements();
			return !__.equals(this.state, measurements) ? measurements : false;
		}

		refresh() {
			// compare measurements for refreshing
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

			this.resizeWindowSubscription = resizeWindow.subscribe(() => this.handleChange());
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

export default MeasureComponent;

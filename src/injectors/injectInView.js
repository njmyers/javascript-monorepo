import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function InView(Wrapped) {
	return class InViewAction extends Component {
		constructor(props) {
			super(props);
			this.state = {
				inView: undefined,
			};
		}

		/* Check inView */
		isInView = ({ clientRect, windowSize } = {}) => {
			const offsetTop = this.DOMNode ? this.DOMNode.offsetTop : undefined;

			return clientRect
				? clientRect.top < 0
					? Math.abs(clientRect.top) - clientRect.height < 0
					: clientRect.top < window.innerHeight
				: undefined;
		};

		/* Compare next inView to State */
		checkInView = ({ sizes } = {}) => {
			const inView = this.isInView(sizes);
			inView !== this.state.inView ? this.setState({ inView }) : null;
		};

		/* Lifecycle */
		componentDidMount() {
			// make sure to set reference to this node before attempting to size
			this.DOMNode = ReactDOM.findDOMNode(this);
			this.checkInView(this.props);
		}

		componentWillReceiveProps(nextProps) {
			this.checkInView(nextProps);
		}

		mergeStateAndProps = () => ({ ...this.props.sizes, ...this.state });

		render() {
			return <Wrapped {...this.props} sizes={this.mergeStateAndProps()} />;
		}
	};
}

export default InView;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as __ from 'smalldash';

function IsMobile(Wrapped) {
	return class IsMobileAction extends Component {
		constructor(props) {
			super(props);
			this.state = {
				isMobile: undefined,
				orientation: undefined,
			};
		}

		/* Check isMobile */
		isMobile = ({ windowSize } = {}) => {
			return windowSize ? windowSize.innerWidth < 768 : undefined;
		};

		getOrientation = ({ windowSize } = {}) => {
			return windowSize
				? windowSize.innerWidth > windowSize.innerHeight ? 'landscape' : 'portrait'
				: undefined;
		};

		/* Compare next isMobile/Orientation to State */
		checkState = ({ sizes } = {}) => {
			if (Object.keys(sizes).length) {
				const state = {
					isMobile: this.isMobile(sizes),
					orientation: this.getOrientation(sizes),
				};
				!__.equals(state, this.state) ? this.setState(state) : null;
			}
		};

		/* Lifecycle */
		componentDidMount() {
			this.checkState(this.props);
		}

		componentWillReceiveProps(nextProps) {
			this.checkState(nextProps);
		}

		mergeStateAndProps = () => ({ ...this.props.sizes, ...this.state });

		render() {
			return <Wrapped {...this.props} sizes={this.mergeStateAndProps()} />;
		}
	};
}

export default IsMobile;

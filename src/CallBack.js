import React, { Component } from 'react';
import __ from 'smalldash';

const CallBack = (Wrapped) => {
	return class CallBackInjector extends Component {
		constructor(props) {
			super(props);
			this.state = {
				name: Wrapped.name,
				id: this.props.id,
			};
		}

		/* inject id and name for reference by parent function */
		mergeStateAndNextProps = (props) => ({ ...props.sizes, ...this.state });

		/* debounce callback for component updates */
		hotUpdate = (props) => {
			this.props.onSize(this.mergeStateAndNextProps(props));
		};

		componentWillReceiveProps(nextProps) {
			if (!__.equals(this.props, nextProps) && this.props.onSize) this.hotUpdate(nextProps);
		}

		render() {
			return <Wrapped {...this.props} />;
		}
	};
};

export default CallBack;

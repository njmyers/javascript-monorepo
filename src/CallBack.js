import React, { Component } from 'react';
import _ from 'lodash';

const CallBack = (Wrapped) => {
	return class CallBackInjector extends Component {
		constructor(props) {
			super(props);
			this.state = {
				name: Wrapped.name,
				id: this.props.id,
			};

			this.hotUpdate = _.debounce(this.hotUpdate, 100);
		}

		/* debounce callback for component updates */
		hotUpdate(props) {
			this.props.cb(this.mergeStateAndNextProps(props));
		}

		/* inject id and name for reference by parent function */
		mergeStateAndNextProps = (props) => ({ ...props.sizes, ...this.state });

		render() {
			this.props.cb ? this.hotUpdate(this.props) : null;
			return <Wrapped {...this.props} />;
		}
	};
};

export default CallBack;

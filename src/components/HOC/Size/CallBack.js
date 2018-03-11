import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';

const CallBack = (Wrapped) => {
	return class CallBackInjector extends Component {
		constructor(props) {
			super(props);
			this.state = {
				name: Wrapped.name,
				id: this.props.id,
			};

			this.hotUpdate = debounce(this.hotUpdate, 100);
		}

		/* debounce callback for component updates */
		hotUpdate(props) {
			this.props.cb(this.mergeStateAndNextProps(props));
		}

		/* inject id and name for reference by parent function */
		mergeStateAndNextProps = (props) => ({ ...props.sizes, ...this.state });

		// /* only update if different */
		// componentWillReceiveProps(nextProps) {
		// 	console.log('receiving');
		// }

		// compo

		render() {
			this.props.cb ? this.hotUpdate(this.props) : null;
			return <Wrapped {...this.props} />;
		}
	};
};

export default CallBack;

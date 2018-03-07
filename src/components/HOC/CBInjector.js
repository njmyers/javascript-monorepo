import React, { Component } from 'react';
import isEqual from 'lodash.isequal';

function CBInjector(WrappedComponent) {
	return class CBHOC extends Component {
		constructor(props) {
			super(props);
			this.state = {
				name: WrappedComponent.name,
				id: this.props.id,
			};
		}

		/* call this to hook into the cb */
		hotUpdate = (object) =>
			typeof object === 'object' && this.props.cb ? this.props.cb(object) : null;

		/* inject id and name for reference by parent function */
		mergeStateAndProps = () => ({ ...this.props.sizes, ...this.state });

		componentWillReceiveProps(nextProps) {
			if (!isEqual(nextProps.sizes, this.props.sizes)) {
				this.hotUpdate(this.mergeStateAndProps());
			}
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
}

export default CBInjector;

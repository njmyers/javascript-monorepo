import React, { PureComponent } from 'react';
const importListener = () => import('./listen');

/**
 * This function will inject one of our listeners (usually resize or scroll) in the sizes prop.
 * This will give the user access to subscribe to a window event.
 * @param {string} listener which listeners to inject into our sizes prop
 * @param {Component} Wrapped the component we are injecting into
 * @return {class} the wrapped component
 */
const createSubscriptionInjector = (listener) => (Wrapped) => {
	return class SubscribeListener extends PureComponent {
		constructor(props) {
			super(props);
		}

		/**
		 * The injection will only happen after the component has mounted
		 * this will prevent any calls to a global window object before it is present.
		 * Therefore we must load the listener subscriptions asynchronously to support SSR
		 */
		componentDidMount() {
			importListener()
				.then((code) => {
					this[listener] = code[listener];
					this.forceUpdate();
				})
				.catch((err) => {
					if (process.env.NODE_ENV !== 'production') console.log(err);
				});
		}

		mergeStateAndProps = () => ({ ...this.props.sizes, [listener]: this[listener] });

		render() {
			return <Wrapped {...this.props} sizes={this.mergeStateAndProps()} />;
		}
	};
};

export default createSubscriptionInjector;

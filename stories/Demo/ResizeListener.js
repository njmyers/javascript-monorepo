import React, { Component } from 'react';
import Size from '../../src';

import LoremIpsum from '../Shared/LoremIpsum';

class ScrollListener extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resized: 0,
		};
	}

	onResize = () => {
		this.setState({
			resized: this.state.resized + 1,
		});
	};

	componentDidUpdate() {
		if (this.props.sizes.resizeWindow && !this.subscription) {
			this.subscription = this.props.sizes.resizeWindow.subscribe(this.onResize);
		}
	}

	componentWillUnmount() {
		if (this.subscription) this.subscription.unsubscribe();
	}

	render() {
		return (
			<React.Fragment>
				<h2>Child Component</h2>
				<p>The window has resized: {this.state.resized} times since I mounted.</p>
				<LoremIpsum repeat={10} />
			</React.Fragment>
		);
	}
}

export default Size({ resizeWindow: true })(ScrollListener);

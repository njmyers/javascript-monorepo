import React, { Component } from 'react';
import Size from '../../src';

import LoremIpsum from '../Shared/LoremIpsum';

class ScrollListener extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrolled: 0,
		};
	}

	onScroll = () => {
		this.setState({
			scrolled: this.state.scrolled + 1,
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.sizes.scrollWindow && !this.subscription) {
			this.subscription = nextProps.sizes.scrollWindow.subscribe(this.onScroll);
		}
	}

	componentWillUnmount() {
		if (this.subscription) this.subscription.unsubscribe();
	}

	render() {
		return (
			<React.Fragment>
				<h2>Child Component</h2>
				<p>The window has scrolled: {this.state.scrolled} times since I mounted.</p>
				<LoremIpsum repeat={10} />
			</React.Fragment>
		);
	}
}

export default Size({ scrollWindow: true })(ScrollListener);

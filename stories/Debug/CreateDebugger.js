import React, { Component } from 'react';
import Size from '../../src/index';
import LoremIpsum from '../Shared/LoremIpsum';

const CreateDebugger = (options) => {
	const Sized = Size(options)(LoremIpsum);

	return class Debug extends Component {
		constructor(props) {
			super(props);
			this.state = {
				called: 0,
				sizes: [],
			};
		}

		onSize = (sizes) => {
			this.setState({
				called: this.state.called + 1,
				sizes: [...this.state.sizes, sizes],
			});
		};

		render() {
			return (
				<div>
					<h1>Parent Component</h1>
					<p>I can do something cool with these callbacks...</p>
					{this.state.sizes.map((size, index) => {
						return (
							<p>
								{JSON.stringify(size)} from callback: {index}
							</p>
						);
					})}
					<h2>Child Component</h2>
					<Sized repeat={3} onSize={this.onSize} />
				</div>
			);
		}
	};
};

export default CreateDebugger;

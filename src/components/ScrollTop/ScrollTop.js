import React, { Component } from 'react';
import { scrollWindow } from '../../utils/listen';

import './scroll-top-default.css';

class ScrollTop extends Component {
	constructor(props) {
		super(props);

		this.icon = this.props.icon || 'arrow-up';
		this.size = this.props.size || '2x';
		this.className = this.props.className || 'scroll-window-up';

		this.state = {
			style: {
				bottom: '2%',
			},
		};
	}

	handleScroll = () => {
		if (window.pageYOffset > 200) {
			this.setState({
				style: {
					bottom: '2%',
					opacity: 1,
				},
			});
		} else {
			this.setState({
				style: {
					bottom: '2%',
					opacity: 0,
				},
			});
		}
	};

	scrollUp = () => {
		window.scroll({
			left: 0,
			top: 0,
			behavior: 'smooth',
		});
	};

	componentWillUnmount() {
		this.scrollWindowSubscription = scrollWindow.subscribe(() => this.handleScroll());
	}

	componentDidMount() {
		this.scrollWindowSubscription.unsubscribe();
	}

	componentWillReceiveProps() {
		const bottom = this.props.audioPlayer ? '80px' : '60px';

		this.setState({
			style: {
				bottom,
			},
		});
	}

	render() {
		const iconClass = `fa fa-${this.icon} fa-${this.size}`;
		const className = `${this.className} ${iconClass}`;

		return <button className={className} style={this.state.style} onClick={this.scrollUp} />;
	}
}

export default ScrollTop;

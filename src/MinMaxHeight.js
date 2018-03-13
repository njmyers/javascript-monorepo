import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { resizeWindow } from './listen';

function MinMaxHeight(Wrapped) {
	return class MinMaxHeightAction extends Component {
		constructor(props) {
			super(props);
			this.state = {
				maxHeight: 0,
				minHeight: 99999999,
			};
		}

		/* Compare next inView to State */
		compareHeight = ({ sizes } = {}) => {
			if (Object.keys(sizes.clientRect).length) {
				const height = sizes.clientRect.height;
				this.setState({
					maxHeight: Math.max(this.state.maxHeight, height),
					minHeight: Math.min(this.state.minHeight, height),
				});
			}
		};

		/* Lifecycle */
		componentDidMount() {
			this.compareHeight(this.props);
		}

		componentWillReceiveProps(nextProps) {
			this.compareHeight(nextProps);
		}

		mergeStateAndProps = () => ({ ...this.props.sizes, ...this.state });

		render() {
			const style = {
				height: this.state.height + 'px',
			};
			return <Wrapped style={style} {...this.props} sizes={this.mergeStateAndProps()} />;
		}
	};
}

export default MinMaxHeight;

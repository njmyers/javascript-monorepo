import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import isEqual from 'lodash.isequal';
import { AudioMeter, PlayPauseNext, TrackInfo, Volume } from './Controls';
import InView from '../HOC/InView';

import './audio.css';

class Audio extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		if (!isEqual(nextProps.inView.clientRect, this.props.inView.clientRect)) {
			this.props.playerSize(nextProps.inView.clientRect);
		}
	}

	render() {
		return (
			<aside className="audio-player-container">
				<article className="player">
					<PlayPauseNext />
					<TrackInfo />
					<AudioMeter />
					<Volume />
				</article>
			</aside>
		);
	}
}

export default InView(Audio);

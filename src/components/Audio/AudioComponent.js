import React, { Component } from 'react';
import { compose } from 'redux';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import { AudioMeter, PlayPauseNext, TrackInfo, Volume } from './Controls';
import InView from '../HOC/InView';

import './audio.sass';

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

const DisplayWrapper = (Wrapped) => (props) => {
	return props.display ? <Wrapped {...props} /> : null;
};

export default compose(DisplayWrapper, InView)(Audio);

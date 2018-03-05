import React, { Component } from 'react';
// import Marquee from '../Marquee';
// import sizeMe from '../../utils/size-me';
// import debounce from 'lodash/debounce';
import { AudioMeter, PlayPauseNext, TrackInfo, Volume } from './Controls';

import './audio.css';

class AudioPlayer extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.handleUpdate = debounce(this.handleUpdate.bind(this), 50);
	// }

	// handleUpdate() {
	// 	this.props.updateContentSize(this.props.size);
	// }

	// componentDidUpdate() {
	// 	this.handleUpdate();
	// }

	// componentWillMount() {
	// 	this.props.saveAudioEncoding();
	// }

	render() {
		return (
			<aside className="audio-player-container">
				<TrackInfo />
				<PlayPauseNext />
				<AudioMeter />
				<Volume />
			</aside>
		);
	}
}

export default AudioPlayer;

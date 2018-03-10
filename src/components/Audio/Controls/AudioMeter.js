import React from 'react';
import debounce from 'lodash/debounce';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { playerSeek } from '../audio-actions';

// meter scale increase to create more 'steps'
const scale = 1000;
const scaleValue = (value, max) => (!isNaN(value / max) ? Math.ceil(value / max * scale) : 0);
const deScaleValue = (value, max) => value / scale * max;

/*
 TODO: Add debouncing on stateless component
*/

const Meter = ({ currentTime, duration, seek } = {}) => {
	return (
		<div className="audio-meter">
			<input
				type="range"
				min="0"
				max={scale}
				value={scaleValue(currentTime, duration)}
				name="seek"
				onChange={seek}
				className="audio-meter"
			/>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	duration: state.audioPlayer.duration,
	currentTime: state.audioPlayer.currentTime,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSeek: (value, duration) => compose(dispatch, playerSeek, deScaleValue)(value, duration),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...dispatchProps,
	seek: (event) => dispatchProps.onSeek(event.target.value, stateProps.duration),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Meter);

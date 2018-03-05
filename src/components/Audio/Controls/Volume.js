import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { playerVolume, playerMute } from '../audio-actions';

import Button from './Button';

// meter scale increase to create more 'steps'
const scale = 100;
const scaleValue = (value, max = 1) => (!isNaN(value / max) ? Math.ceil(value / max * scale) : 0);
const deScaleValue = (value, max = 1) => value / scale * max;

const Volume = ({ volume, muted, setVolume, setMute } = {}) => {
	const icon = volume < 70 ? 'fa fa-volume-down' : 'fa fa-volume-up';

	return (
		<div className="volume">
			<label htmlFor="volume" className={icon} onClick={setMute} />
			<input
				type="range"
				min="0"
				max={scale}
				name="volume"
				id="volume"
				value={scaleValue(volume)}
				onChange={setVolume}
			/>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	muted: state.audioPlayer.muted,
	volume: state.audioPlayer.volume,
});

const mapDispatchToProps = (dispatch) => ({
	setVolume: (event) => compose(dispatch, playerVolume, deScaleValue)(event.target.value),
	setMute: () => compose(dispatch, playerMute)(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Volume);

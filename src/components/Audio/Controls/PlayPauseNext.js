import React from 'react';
import { connect } from 'react-redux';

import { playerStart, playerStop, playerPause, playerScroll } from '../audio-actions';

import Button from './Button';

const PlayPauseNext = ({ playing, play, pause, stop, next, prev, isMobile } = {}) => {
	return (
		<div className="audio-player-buttons">
			<Button icon="backward" cb={prev} />
			<Button
				icon={!playing ? 'play' : 'pause'}
				cb={!playing ? play : pause}
				className="audio-player big"
			/>
			<Button icon="stop" className="big" cb={stop} />
			<Button icon="forward" cb={next} />
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	playing: state.audioPlayer.playing,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	play: () => dispatch(playerStart()),
	pause: () => dispatch(playerPause()),
	stop: () => dispatch(playerStop()),
	next: () => dispatch(playerScroll(1)),
	prev: () => dispatch(playerScroll(-1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayPauseNext);

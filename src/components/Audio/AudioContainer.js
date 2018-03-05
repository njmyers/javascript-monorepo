import { connect } from 'react-redux';
import AudioComponent from './AudioComponent';
import { playerStart, playerStop, playerSeek } from './audio-actions';

const mapStateToProps = (state, ownProps) => {
	return {
		audioPlayer: state.audioPlayer,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		stop: () => dispatch(playerStop()),
		start: () => dispatch(playerStart()),
		seek: (value) => dispatch(playerSeek(value)),
	};
};

const Audio = connect(mapStateToProps, mapDispatchToProps)(AudioComponent);

export default Audio;

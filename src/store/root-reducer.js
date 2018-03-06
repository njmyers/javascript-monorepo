import { combineReducers } from 'redux';
import { WPReducer } from '../utils/wp';
import contactReducer from '../components/Contact/contact-reducer';
import UIReducer from '../components/Root/UI';
import audioPlayerReducer from '../components/Audio/audio-reducer';

const rootReducer = combineReducers({
	shows: WPReducer('shows'),
	contact: contactReducer,
	UI: UIReducer,
	audioPlayer: audioPlayerReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import { WPReducer } from '../utils/wp';

const rootReducer = combineReducers({
	shows: WPReducer('shows'),
});

export default rootReducer;

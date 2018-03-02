import { WPEpic } from '../utils/wp';
import { combineEpics } from 'redux-observable';

export default combineEpics(WPEpic);

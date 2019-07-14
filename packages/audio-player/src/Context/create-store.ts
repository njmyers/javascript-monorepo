import { applyMiddleware, createStore } from 'redux';
import audioMiddleware from '../AudioCore/audio-middleware';
import rootReducer from '../AudioCore/audio-reducer';

export default () => createStore(rootReducer, applyMiddleware(audioMiddleware));

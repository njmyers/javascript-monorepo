// @flow
import * as redux from 'redux';
import WPReducer from './wp-reducer';

const createRootReducer = (postTypes: Array<string>) => {
  const reducers = {};

  postTypes.forEach((type) => {
    reducers[type] = WPReducer(type);
  });

  return redux.combineReducers(reducers);
};

export default createRootReducer;

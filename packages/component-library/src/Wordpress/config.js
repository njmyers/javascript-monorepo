import AllData from './AllData';
import { combineReducers } from 'redux';

type Config = {
  postTypes: Array<string>,
};

const createWordpress = (postTypes) => {
  return Object.seal({
    postTypes: [],
    components: {
      AllData,
    },
    namespace: 'wordpress',
    rootReducer: combineReducers({}),
  });
};

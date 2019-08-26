import camelCaseReducer from '../kebab-case-reducer';
import * as camelCaseActions from '../kebab-case-actions';

// https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1
describe('it should dispatch actions', () => {
  test('it is a function type', () => {
    expect(typeof camelCaseReducer).toBe('function');
  });
});

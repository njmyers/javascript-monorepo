/** @flow */
import { camelName } from "../args";

// https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1
const reduxReducerTestFile = (kebab, options) =>
  `import ${camelName(kebab)}Reducer from '../${kebab}-reducer';
import * as ${camelName(kebab)}Actions from '../${kebab}-actions';

describe('it should dispatch actions', () => {
  test('it is a function type', () => {
    expect(typeof ${camelName(kebab)}Reducer).toBe('function')
  });
})
`;

export default reduxReducerTestFile;

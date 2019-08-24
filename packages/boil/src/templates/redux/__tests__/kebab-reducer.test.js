import camelReducer from "../kebab-reducer";
import * as camelActions from "../kebab-actions";

// https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1
describe("it should dispatch actions", () => {
  test("it is a function type", () => {
    expect(typeof camelReducer).toBe("function");
  });
});
